import { Dispatch, SetStateAction } from "react";
import { Loader } from "lucide-react";
import { NextPage } from "next";
import { parseUnits } from "viem";
import { useWalletClient } from "wagmi";
import { Button } from "~~/components/shad/ui/button";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "~~/components/shad/ui/dialog";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth/useScaffoldReadContract";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth/useScaffoldWriteContract";
import { aproveAmount, revokeAmount } from "~~/lib/lifi";

type DialogStakeProps = {
  address: string;
  contractAddress: string;
  stakeAmount: string;
  loadingTransaction: boolean;
  setLoadingTransaction: Dispatch<SetStateAction<boolean>>;
};

const DialogStake: NextPage<DialogStakeProps> = ({
  address,
  contractAddress,
  stakeAmount,
  loadingTransaction,
  setLoadingTransaction,
}) => {
  const { data: wagmiClient } = useWalletClient();

  //states

  //smart contract
  const { data: allowance, isLoading } = useScaffoldReadContract({
    contractName: "USDC",
    functionName: "allowance",
    args: [address, contractAddress],
  });

  const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract({ contractName: "MetaCashback" });

  //functions
  const handleSetApprove = async () => {
    if (!wagmiClient) return;
    try {
      setLoadingTransaction(true);
      const si = await aproveAmount(wagmiClient, contractAddress, parseUnits(stakeAmount, 6));

      console.log(si);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingTransaction(false);
    }
  };

  const handleTransfer = async () => {
    try {
      setLoadingTransaction(true);
      await writeYourContractAsync({
        functionName: "stakeTokens",
        args: [parseUnits(stakeAmount, 6)],
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingTransaction(false);
    }
  };

  return (
    <DialogContent className="bg-base-200">
      <DialogHeader>
        <DialogTitle>Staking USDC</DialogTitle>
      </DialogHeader>
      <DialogDescription>You must first approve the amount entered</DialogDescription>
      <div className="flex flex-col justify-center">
        {!allowance ? (
          <Button onClick={handleSetApprove} disabled={loadingTransaction || isLoading}>
            {!loadingTransaction || isLoading ? (
              "Approve"
            ) : (
              <>
                <Loader className="animate-spin" /> Loading...
              </>
            )}
          </Button>
        ) : (
          <Button onClick={handleTransfer} disabled={loadingTransaction || isLoading}>
            Transfer
          </Button>
        )}

        {allowance ? (
          <Button
            variant={"destructive"}
            onClick={async () => {
              await revokeAmount(wagmiClient!, contractAddress);
            }}
          >
            DELETE BUTTON
          </Button>
        ) : (
          ""
        )}
      </div>
    </DialogContent>
  );
};

export default DialogStake;
