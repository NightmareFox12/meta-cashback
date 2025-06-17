"use client";

import Image from "next/image";
import { necesito } from "../lib/lifi";
import CardLevel from "./_components/CardLevel";
import PerformanceCalculator from "./_components/PerformanceCalculator";
import { UserChart } from "./_components/UserChart";
import { TrendingUp, Wallet } from "lucide-react";
import { NextPage } from "next";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";
import { Button } from "~~/components/shad/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~~/components/shad/ui/card";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { formatNumber } from "~~/utils/formatNumber";

const Home: NextPage = () => {
  const { address } = useAccount();

  // const { data: userBalance } = useScaffoldReadContract({
  //   contractName: "USDC",
  //   functionName: "balanceOf",
  //   args: [address],
  // });

  const { data: userBalance } = useScaffoldReadContract({
    contractName: "USDCFake",
    functionName: "balanceOf",
    args: [address],
  });

  return (
    <main className="flex pt-5 mx-4 flex-col gap-4">
      <Button
        onClick={async () => {
          console.log("violin");
          const ayuda = await necesito();
          console.log(ayuda);
        }}
      >
        AYUDA
      </Button>

      <div className="flex flex-row gap-4">
        <section className="flex justify-center items-center flex-1 mt-4 px-3">
          <Card className="w-full bg-gradient-to-br from-blue-800 to-blue-400 text-white h-full relative overflow-hidden">
            <CardHeader className="text-center space-y-2">
              <div className="mx-auto w-16 h-16  bg-blue-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Wallet className="w-8 h-8" />
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div className="absolute inset-0 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
              </div>
              <CardTitle className="text-2xl font-bold ">My Balance</CardTitle>
            </CardHeader>

            <CardContent className="text-center">
              <div className=" bg-white/20 backdrop-blur-sm rounded-2xl p-2 border border-white/20 flex items-center justify-center space-x-2">
                <Image src={"/usdc.png"} alt="usdc icon" width={20} height={20} />
                <p className="text-4xl font-bold">${formatNumber(formatUnits(userBalance ?? 0n, 6))}</p>
              </div>
            </CardContent>
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
              <Button className="bg-secondary hover:bg-secondary/50">Withdraw Earnings</Button>
            </div>
          </Card>
        </section>
        {/* Role Card Section */}
        <CardLevel />
        <section className="flex justify-center items-center flex-1 mt-4 px-3">
          <UserChart />
        </section>
      </div>

      <div className="flex flex-row gap-4 justify-center">
        <section className="flex justify-center items-center flex-1 px-3 max-w-md">
          <Card className="w-full bg-gradient-to-br from-blue-800 to-blue-400 text-white h-full relative overflow-hidden">
            <CardHeader className="text-center space-y-2">
              <div className="mx-auto w-16 h-16  bg-blue-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div className="absolute inset-0 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
              </div>
              <CardTitle className="text-2xl font-bold">Progress of Level</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-10">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-lg font-medium mb-2">Next Level: Pioneer</p>
                <div className="w-full bg-secondary rounded-full h-3 mb-2">
                  <div className="bg-green-300 h-3 rounded-full" style={{ width: "30%" }}></div>
                </div>
                <p className="text-sm opacity-70">You need $100 USDC to level up</p>
              </div>
            </CardContent>
          </Card>
        </section>
        <PerformanceCalculator />
      </div>
    </main>
  );
};

export default Home;
