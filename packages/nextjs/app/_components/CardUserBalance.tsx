import Image from "next/image";
import { TrendingUp, Wallet } from "lucide-react";
import { NextPage } from "next";
import { formatUnits } from "viem";
import { Button } from "~~/components/shad/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~~/components/shad/ui/card";
import { Skeleton } from "~~/components/shad/ui/skeleton";
import { formatNumber } from "~~/utils/formatNumber";

type CardUserBalanceProps = {
  userBalance: bigint | undefined;
};
const CardUserBalance: NextPage<CardUserBalanceProps> = ({ userBalance }) => {
  return (
    <Card className="w-full bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-300 text-white h-full relative overflow-hidden">
      <CardHeader className="text-center space-y-2">
        <div className="mx-auto w-16 h-16  bg-blue-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Wallet className="w-8 h-8" />
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <div className="absolute inset-0 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
        </div>
        <CardTitle className="text-2xl font-bold ">My Balance</CardTitle>
      </CardHeader>
      {userBalance === undefined ? (
        <div className="w-full mx-auto px-5">
          <Skeleton className="w-full h-7" />
        </div>
      ) : (
        <CardContent className="text-center">
          <div className=" bg-white/20 backdrop-blur-sm rounded-2xl p-2 border border-white/20 flex items-center justify-center space-x-2">
            <Image src={"/usdc.png"} alt="usdc icon" width={20} height={20} />
            <p className="text-4xl font-bold">
              $
              {parseFloat(formatUnits(userBalance ?? 0n, 6)) >= 1
                ? formatNumber(formatUnits(userBalance ?? 0n, 6))
                : formatUnits(userBalance ?? 0n, 6)}
            </p>
          </div>
        </CardContent>
      )}
      <CardFooter className="pt-0">
        <div className="w-full bg-white/20 backdrop-blur-sm rounded-xl p-2 border border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-green-400" />
              </div>
              <span className="font-medium">Weekly Earnings</span>
            </div>
            <span className="font-bold">15 USDC</span>
          </div>
        </div>
      </CardFooter>
      <div className="px-6 mx-auto">
        <Button className="bg-warning hover:bg-warning/20">Withdraw Earnings</Button>
      </div>
    </Card>
  );
};

export default CardUserBalance;
