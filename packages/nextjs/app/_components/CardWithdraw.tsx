import React, { ForwardRefExoticComponent, RefAttributes } from "react";
import { Coins, Crown, Flame, LucideProps, Rocket, Shield } from "lucide-react";
import { useAccount } from "wagmi";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/shad/ui/card";
import { Skeleton } from "~~/components/shad/ui/skeleton";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const CardWithdraw = () => {
  const { address } = useAccount();

  //smart contract
  const { data: currentLevel, isLoading } = useScaffoldReadContract({
    contractName: "MetaCashback",
    functionName: "getLevel",
    account: address,
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
      {isLoading ? (
        <Skeleton className="w-full h-full" />
      ) : currentLevel !== undefined ? (
        <Card className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl p-6 text-white relative overflow-hidden h-full w-full justify-center">
          <CardHeader>
            <div className="mx-auto w-16 h-16  bg-blue-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Coins className="w-8 h-8" />
            </div>
            <BackgroundIcon />
            <CardTitle className="text-center text-2xl font-bold">name</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-center items-center">
            <p className="text-lg opacity-90">range</p>
            <p className="text-lg font-semibold">cashback</p>
          </CardContent>
        </Card>
      ) : (
        <Skeleton className="w-full h-full" />
      )}
    </>
  );
};
export default CardWithdraw;
