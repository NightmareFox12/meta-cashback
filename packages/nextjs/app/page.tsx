"use client";

import CardLevel from "./_components/CardLevel";
import CardProgress from "./_components/CardProgress";
import CardUserBalance from "./_components/CardUserBalance";
import CardWithdraw from "./_components/CardWithdraw";
import PerformanceCalculator from "./_components/PerformanceCalculator";
import { UserChart } from "./_components/UserChart";
import { Sparkles } from "lucide-react";
import { NextPage } from "next";

const Home: NextPage = () => {
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

      {/* Cards  */}
      <div className="grid lg:h-[250px] gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <CardUserBalance />
        <CardWithdraw />
        <CardLevel />
        <CardProgress />
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        <UserChart />
        <PerformanceCalculator />
      </div>
    </main>
  );
};

export default Home;
