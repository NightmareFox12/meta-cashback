import React from "react";
import { Coins } from "lucide-react";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";
import { Button } from "~~/components/shad/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/shad/ui/card";
import { Skeleton } from "~~/components/shad/ui/skeleton";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const CardWithdraw = () => {
  const { address } = useAccount();

  //smart contract
  const { data: totalStake, isLoading } = useScaffoldReadContract({
    contractName: "MetaCashback",
    functionName: "totalStake",
    args: [address],
  });

  //components
  const BackgroundIcon = () => {
    return (
      <>
        <div className="absolute top-2 right-2 opacity-20">
          <Coins className="w-16 h-16" />
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <div className="absolute inset-0 bg-white rounded-full transform translate-x-8 -translate-y-8">
            <Coins className="w-8 h-8 opacity-20" />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Card className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl p-6 text-white relative overflow-hidden h-full w-full justify-center">
        <CardHeader>
          <div className="mx-auto w-16 h-16  bg-blue-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Coins className="w-8 h-8" />
          </div>
          <BackgroundIcon />
          <CardTitle className="text-center text-2xl font-bold">Withdraw</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-center items-center">
          Total Stake: {isLoading ? <Skeleton className="w-8 h-4" /> : <>{formatUnits(totalStake ?? 0n, 6)} USDC</>}
          {/* <p className="text-lg font-semibold">cashback</p> */}
        </CardContent>
        <Button>Withdraw</Button>
      </Card>
    </>
  );
};
export default CardWithdraw;
