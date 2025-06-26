"use client";

import { useMemo } from "react";
import { TrendingUp } from "lucide-react";
import { useAccount } from "wagmi";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/shad/ui/card";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const levelThresholds = [
  { name: "Explorer", min: 0n, max: 100n },
  { name: "Pioneer", min: 100n, max: 500n },
  { name: "Legendary", min: 500n, max: 1000n },
  { name: "Elite", min: 1000n, max: BigInt(Number.MAX_SAFE_INTEGER) },
];

const CardProgress = () => {
  const { address } = useAccount();

  const { data: currentLevel } = useScaffoldReadContract({
    contractName: "MetaCashback",
    functionName: "getLevel",
    account: address,
  });

  const { data: explorerLevel } = useScaffoldReadContract({
    contractName: "MetaCashback",
    functionName: "EXPLORER_LEVEL",
  });

  const { data: pioneerLevel } = useScaffoldReadContract({
    contractName: "MetaCashback",
    functionName: "PIONEER_LEVEL",
  });

  const { data: legendaryLevel } = useScaffoldReadContract({
    contractName: "MetaCashback",
    functionName: "LEGENDARY_LEVEL",
  });

  const { data: eliteLevel } = useScaffoldReadContract({
    contractName: "MetaCashback",
    functionName: "ELITE_LEVEL",
  });

  const progressData = useMemo(() => {
    if (!currentLevel || !explorerLevel || !pioneerLevel || !legendaryLevel || !eliteLevel) return null;

    const levelHex = currentLevel.toString();
    let currentIndex = 0;

    if (levelHex === pioneerLevel.toString()) currentIndex = 1;
    else if (levelHex === legendaryLevel.toString()) currentIndex = 2;
    else if (levelHex === eliteLevel.toString()) currentIndex = 3;

    const current = levelThresholds[currentIndex];
    const next = levelThresholds[currentIndex + 1];

    const range = next ? next.min - current.min : 1n;
    const achieved = next ? 0n : 1n; // cuando no hay siguiente nivel
    const progress = next ? Number((achieved * 100n) / range) : 100;
    const remaining = next ? next.min - current.min : 0n;

    return {
      currentName: current.name,
      nextName: next?.name ?? "Maxed Out",
      progress: Math.min(progress, 100),
      remaining,
    };
  }, [currentLevel, explorerLevel, pioneerLevel, legendaryLevel, eliteLevel]);

  return (
    <Card className="w-full bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-300 text-white h-full relative overflow-hidden">
      <CardHeader className="text-center space-y-2">
        <div className="mx-auto w-16 h-16 bg-blue-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <TrendingUp className="w-8 h-8" />
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <div className="absolute inset-0 bg-white rounded-full transform translate-x-16 -translate-y-16" />
        </div>
        <CardTitle className="text-2xl font-bold">Progress of Level</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-10">
        {progressData ? (
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <p className="text-lg font-medium mb-2">
              {progressData.nextName !== "Maxed Out"
                ? `Next Level: ${progressData.nextName}`
                : "You've reached the highest level 🎉"}
            </p>
            <div className="w-full bg-secondary rounded-full h-3 mb-2">
              <div
                className="bg-green-300 h-3 rounded-full transition-all duration-700"
                style={{ width: `${progressData.progress}%` }}
              ></div>
            </div>
            {progressData.nextName !== "Maxed Out" && (
              <p className="text-sm opacity-70">
                You need approximately ${progressData.remaining.toString()} USDC to level up
              </p>
            )}
          </div>
        ) : (
          <p className="opacity-60">Loading progress data...</p>
        )}
      </CardContent>
    </Card>
  );
};

export default CardProgress;
