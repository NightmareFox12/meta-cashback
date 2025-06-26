import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import { Loader } from "lucide-react";
import { NextPage } from "next";
import { parseUnits } from "viem";
import { useWalletClient } from "wagmi";
import { Button } from "~~/components/shad/ui/button";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "~~/components/shad/ui/dialog";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth/useScaffoldWriteContract";
import { aproveAmount, getAllowance } from "~~/lib/lifi";

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
  }, [address, setLoadingTransaction, showDialog, loadingTransaction]);

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

  //TODO: crear estado para actualizar el allowance cada vez que transfiera
  //TODO: poner el minAmount en un state para modificarlo en el admin
  //TODO: probar la transferencia completa

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
            {!loadingTransaction ? (
              "Approve"
            ) : (
              <>
                <Loader className="animate-spin" /> Loading...
              </>
            )}
          </Button>
        ) : (
          <Button onClick={handleTransfer} disabled={loadingTransaction}>
            Transfer
          </Button>
        )}

        {allowance}
      </div>
    </DialogContent>
  );
};

export default DialogStake;
