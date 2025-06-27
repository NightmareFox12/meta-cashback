"use client";

import { useMemo } from "react";
import { TrendingUp } from "lucide-react";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/shad/ui/card";
import { Progress } from "~~/components/shad/ui/progress";
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

  const { data: explorerLevel } = useScaffoldReadContract({ contractName: "MetaCashback", functionName: "EXPLORER_LEVEL" });
  const { data: pioneerLevel } = useScaffoldReadContract({ contractName: "MetaCashback", functionName: "PIONEER_LEVEL" });
  const { data: legendaryLevel } = useScaffoldReadContract({ contractName: "MetaCashback", functionName: "LEGENDARY_LEVEL" });
  const { data: eliteLevel } = useScaffoldReadContract({ contractName: "MetaCashback", functionName: "ELITE_LEVEL" });

  const { data: stakeAmount } = useScaffoldReadContract({
    contractName: "MetaCashback",
    functionName: "stakes",
    args: [address],
  });

  const progressData = useMemo(() => {
    if (!currentLevel || !explorerLevel || !pioneerLevel || !legendaryLevel || !eliteLevel || !stakeAmount) return null;

    const levelHex = currentLevel.toString();
    let currentIndex = 0;

    if (levelHex === pioneerLevel.toString()) currentIndex = 1;
    else if (levelHex === legendaryLevel.toString()) currentIndex = 2;
    else if (levelHex === eliteLevel.toString()) currentIndex = 3;

    const current = levelThresholds[currentIndex];
    const next = levelThresholds[currentIndex + 1];

    const userStaking = parseFloat(formatUnits(stakeAmount[0], 6));
    const currentMin = Number(current.min);
    const nextMin = next ? Number(next.min) : currentMin;

    const range = nextMin - currentMin || 1;
    const achieved = userStaking - currentMin;
    const rawProgress = (achieved * 100) / range;
    const progress = next ? Math.min(rawProgress, 100) : 100;
    const remaining = next ? Math.max(nextMin - userStaking, 0) : 0;

    return {
      currentName: current.name,
      nextName: next?.name ?? "Maxed Out",
      progress: parseFloat(progress.toFixed(2)),
      remaining: remaining.toFixed(2),
      userStaking: userStaking.toFixed(2),
    };
  }, [currentLevel, explorerLevel, pioneerLevel, legendaryLevel, eliteLevel, stakeAmount]);

  const BackgroundIcon = () => (
    <>
      <div className="absolute top-2 right-2 opacity-20">
        <TrendingUp className="w-16 h-16" />
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
        <div className="absolute inset-0 bg-white rounded-full transform translate-x-8 -translate-y-8">
          <TrendingUp className="w-8 h-8 opacity-20" />
        </div>
      </div>
    </>
  );

  return (
    <Card className="sm:col-span-2 md:col-span-1 w-full h-full bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-300 relative overflow-hidden justify-center">
      <CardHeader>
        <div className="mx-auto w-16 h-16 bg-blue-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <TrendingUp className="w-8 h-8" />
        </div>
        <BackgroundIcon />
        <CardTitle className="text-2xl font-bold text-center">Progress of Level</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        {progressData ? (
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl flex flex-col gap-2 p-1 border border-white/20">
            <p className="text-lg font-medium mb-2">
              {progressData.nextName !== "Maxed Out"
                ? `Next Level: ${progressData.nextName}`
                : "You've reached the highest level 🎉"}
            </p>
            <div>
              <Progress value={progressData.progress} className="bg-base-100" />
            </div>
            <p className="text-sm opacity-70">
              Your staking amount: <strong>${progressData.userStaking}</strong> USDC
            </p>
            {progressData.nextName !== "Maxed Out" && (
              <p className="text-sm opacity-70">
                You need <strong>${progressData.remaining}</strong> USDC to level up
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
