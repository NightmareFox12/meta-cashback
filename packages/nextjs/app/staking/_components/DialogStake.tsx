import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import { NextPage } from "next";
import { parseUnits } from "viem";
import { useWalletClient } from "wagmi";
import { Button } from "~~/components/shad/ui/button";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "~~/components/shad/ui/dialog";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth/useScaffoldWriteContract";
import { aproveAmount, getAllowance, revokeAmount } from "~~/lib/lifi";

type DialogStakeProps = {
  showDialog: boolean;
  address: string;
  stakeAmount: string;
  loadingTransaction: boolean;
  setLoadingTransaction: Dispatch<SetStateAction<boolean>>;
};

const DialogStake: NextPage<DialogStakeProps> = ({
  showDialog,
  address,
  stakeAmount,
  loadingTransaction,
  setLoadingTransaction,
}) => {
  const { data: wagmiClient } = useWalletClient();

  //states
  const [allowance, setAllowance] = useState<bigint | undefined>(undefined);

  //callbacks
  const getTokenAllowance = useCallback(async () => {
    if (!showDialog) return;
    try {
      setLoadingTransaction(true);
      const res = await getAllowance(address);
      setAllowance(res);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingTransaction(false);
    }
  }, [address, setLoadingTransaction, showDialog]);

  //smart contract
  const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract({ contractName: "MetaCashback" });

  //functions
  const handleAllowance = async () => {
    if (!wagmiClient) return;
    try {
      setLoadingTransaction(true);
      const si = await aproveAmount(wagmiClient, parseUnits(stakeAmount, 6));

      console.log(si);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingTransaction(true);
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

  //effects
  useEffect(() => {
    getTokenAllowance();
  }, [getTokenAllowance]);

  return (
    <DialogContent className="bg-base-200">
      <DialogHeader>
        <DialogTitle>Testing GOD</DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>
      <DialogDescription>You must first approve the amount entered</DialogDescription>
      <div className="flex flex-col justify-center">
        {!allowance ? (
          <Button onClick={handleAllowance} disabled={loadingTransaction}>
            Approve
          </Button>
        ) : (
          <Button onClick={() => revokeAmount(wagmiClient!)} disabled={loadingTransaction}>
            Transfer
          </Button>
        )}

        {allowance}
      </div>
    </DialogContent>
  );
};

export default DialogStake;
