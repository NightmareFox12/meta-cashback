"use client";

import { useCallback, useEffect, useState } from "react";
import CardLevel from "./_components/CardLevel";
import CardUserBalance from "./_components/CardUserBalance";
import CardProgress from "./_components/CardProgress";
import PerformanceCalculator from "./_components/PerformanceCalculator";
import { UserChart } from "./_components/UserChart";
import { Sparkles, TrendingUp } from "lucide-react";
import { NextPage } from "next";
import { useAccount } from "wagmi";
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

      setUserBalance(res?.amount);
    } catch (err) {
      console.log(err);
    }
  }, [address, chainId]);

  //effects
  useEffect(() => {
    getUserBalanceCallBack();
  }, [getUserBalanceCallBack]);

  return (
    <main className="flex pt-5 mx-4 flex-col gap-4">
      {/* Sparkle Decorations */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(20)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-yellow-400/60 animate-twinkle"
            size={12}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
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
          <CardProgress />

        </section>
        <PerformanceCalculator />
      </div>
    </main>
  );
};

export default Home;
