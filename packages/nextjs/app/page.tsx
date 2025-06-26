"use client";

import CardLevel from "./_components/CardLevel";
import CardProgress from "./_components/CardProgress";
import CardUserBalance from "./_components/CardUserBalance";
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
      <div className="flex flex-row gap-4">
        <section className="flex justify-center items-center flex-1 mt-4 px-3">
          {/* Card balance  */}
          <CardUserBalance />
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
