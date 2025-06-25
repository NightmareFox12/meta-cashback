import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import { NextPage } from "next";
import { parseUnits } from "viem";
import { useWalletClient } from "wagmi";
import { Button } from "~~/components/shad/ui/button";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "~~/components/shad/ui/dialog";
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
  }, [address, setLoadingTransaction, showDialog]);

  //functions
  const explicame = async () => {
    if (!wagmiClient) return;
    try {
      const si = await aproveAmount(wagmiClient, parseUnits(stakeAmount, 6));

      console.log(si);
    } catch (err) {
      console.log(err);
    }
  };

  // const getTokenAllowance = async () => {
  //   setLoadingTransaction(true);
  //   try {
  //     const allowance = await getAllowance(address);

  //     console.log(allowance, "allowance");
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setLoadingTransaction(false);
  //   }
  // };

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
        {allowance && allowance > 0n && <Button onClick={explicame}>Approve</Button>}
      </div>
    </DialogContent>
  );
};

export default DialogStake;
