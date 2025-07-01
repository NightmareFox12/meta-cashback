import Image from "next/image";
import { Wallet } from "lucide-react";
import { NextPage } from "next";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/shad/ui/card";
import { Skeleton } from "~~/components/shad/ui/skeleton";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth/useScaffoldReadContract";
import { formatNumber } from "~~/utils/formatNumber";

const CardUserBalance: NextPage = () => {
  const { address } = useAccount();

  const { data: userBalance } = useScaffoldReadContract({
    contractName: "USDC",
    functionName: "balanceOf",
    args: [address],
  });

  //components
  const BackgroundIcon = () => {
    return (
      <>
        <div className="absolute top-2 right-2 opacity-20">
          <Wallet className="w-16 h-16" />
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <div className="absolute inset-0 bg-white rounded-full transform translate-x-8 -translate-y-8">
            <Wallet className="w-8 h-8 opacity-20" />
          </div>
        </div>
      </>
    );
  };

  return (
    <Card className="w-full bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-300 text-white h-full relative overflow-hidden">
      <CardHeader className="text-center">
        <div className="mx-auto w-16 h-16  bg-blue-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Wallet className="w-8 h-8" />
        </div>
        <BackgroundIcon />
        <CardTitle className="text-2xl font-bold">My Balance</CardTitle>
      </CardHeader>
      {userBalance === undefined ? (
        <div className="w-full mx-auto px-5">
          <Skeleton className="w-full h-7" />
        </div>
      ) : (
        <CardContent className="h-full">
          <div className="bg-white/20 rounded-2xl py-2 border border-white/20 flex items-center justify-center gap-1">
            <Image src={"/usdc.png"} alt="usdc icon" width={20} height={20} className="mt-1" />
            <p className="text-3xl font-bold">
              $
              {parseFloat(formatUnits(userBalance ?? 0n, 6)) >= 1
                ? formatNumber(formatUnits(userBalance ?? 0n, 6))
                : formatUnits(userBalance ?? 0n, 6)}
            </p>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default CardUserBalance;
