"use client";

import { useCallback, useEffect, useState } from "react";
import CardLevel from "./_components/CardLevel";
import CardUserBalance from "./_components/CardUserBalance";
import PerformanceCalculator from "./_components/PerformanceCalculator";
import { UserChart } from "./_components/UserChart";
import { TrendingUp } from "lucide-react";
import { NextPage } from "next";
import { useAccount } from "wagmi";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/shad/ui/card";
import { getUserBalance } from "~~/lib/lifi";

const Home: NextPage = () => {
  const { address, chainId } = useAccount();

  //states
  const [userBalance, setUserBalance] = useState<bigint | undefined>(undefined);

  //use callback
  const getUserBalanceCallBack = useCallback(async () => {
    if (chainId === undefined || address === undefined) return;

    try {
      const res = await getUserBalance({
        chainID: chainId,
        user: address,
      });

      setUserBalance(res?.amount ?? 0n);
      console.log(userBalance);
    } catch (err) {
      console.log(err);
    }
  }, [address, chainId, userBalance]);

  //effects
  useEffect(() => {
    getUserBalanceCallBack();
  }, [getUserBalanceCallBack]);

  return (
    <main className="flex pt-5 mx-4 flex-col gap-4">
      <div className="flex flex-row gap-4">
        <section className="flex justify-center items-center flex-1 mt-4 px-3">
          {/* Card balance  */}
          <CardUserBalance userBalance={userBalance} />
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
