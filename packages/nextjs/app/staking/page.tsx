"use client";

import { useState } from "react";
import DialogHistory from "./_components/DialogHistory";
import DialogStake from "./_components/DialogStake";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { ArrowUpRight, Coins, History, InfoIcon, Loader, Sparkles } from "lucide-react";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";
import { Button } from "~~/components/shad/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~~/components/shad/ui/card";
import { Dialog, DialogTrigger } from "~~/components/shad/ui/dialog";
import { Input } from "~~/components/shad/ui/input";
import { Label } from "~~/components/shad/ui/label";
import { Skeleton } from "~~/components/shad/ui/skeleton";
import { TabsContent } from "~~/components/shad/ui/tabs";
import { useDeployedContractInfo, useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { formatNumber } from "~~/utils/formatNumber";

const StakingScreen = () => {
  const { address } = useAccount();

  //states
  const [stakeAmount, setStakeAmount] = useState<string>("");
  const [loadingTransaction, setLoadingTransaction] = useState<boolean>(false);

  //TODO: implementar eventos en el chart
  // Mock data
  const apy = 8.5;

  //smart contract
  const { data: metaCashbackData } = useDeployedContractInfo({ contractName: "MetaCashback" });

  const { data: minAmount, isLoading: minAmountLoading } = useScaffoldReadContract({
    contractName: "MetaCashback",
    functionName: "minStakingAmount",
  });

  const { data: totalStake } = useScaffoldReadContract({
    contractName: "MetaCashback",
    functionName: "totalStake",
    args: [address],
  });

  const { data: userBalance } = useScaffoldReadContract({
    contractName: "USDC",
    functionName: "balanceOf",
    args: [address],
  });

  return (
    <main className="min-h-screen p-4">
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
      <div className="lg:max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">USDC Staking</h1>
          <p className="text-base-content/70">Earn rewards by staking your USDC tokens</p>
        </div>

        {/* Stats Cards */}
        <div className="flex  gap-4 w-full">
          <Card className="bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-300 text-white flex-1">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Coins className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">Staked Amount</span>
              </div>
              <div className="mt-2">
                <span className="text-2xl font-bold ">{formatUnits(totalStake ?? 0n, 6)}</span>
                <span className="text-sm ml-1">USDC</span>
              </div>
            </CardContent>
          </Card>

          {/* Min amount card  */}
          <Card className="bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-300 text-white flex-1">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <InfoIcon className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium">Min Amount</span>
              </div>
              <div className="mt-2">
                {minAmountLoading ? (
                  <Skeleton className="h-5 w-[100px] mt-5" />
                ) : (
                  <>
                    <span className="text-2xl font-bold">${formatUnits(minAmount ?? 0n, 6)}</span>
                    <span className="text-sm ml-1">USDC</span>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Staking Interface */}
          <div className="lg:col-span-3">
            <Card className="bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-300 text-white">
              <CardHeader>
                <CardTitle>Stake USDC</CardTitle>
                <CardDescription className="text-white">
                  Stake your USDC tokens to earn {apy}% APY rewards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="stake" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="stake" className="flex items-center gap-2">
                      <ArrowUpRight className="h-4 w-4 text-green-400" />
                      Stake
                    </TabsTrigger>
                    {/* <TabsTrigger value="unstake" className="flex items-center gap-2">
                      <ArrowDownLeft className="h-4 w-4" />
                      Unstake
                    </TabsTrigger> */}
                  </TabsList>

                  <TabsContent value="stake" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="stake-amount">Amount to Stake</Label>
                      <div className="flex space-x-2">
                        <Input
                          id="stake-amount"
                          placeholder="5.0"
                          value={stakeAmount}
                          onChange={e => {
                            const value = e.target.value;
                            if (/^\d*\.?\d*$/.test(value)) setStakeAmount(value);
                          }}
                          className="flex-1"
                        />
                        <Button
                          variant="outline"
                          className="bg-gray-400 text-white hover:bg-gray-500"
                          onClick={() => setStakeAmount(userBalance?.toString() ?? "")}
                        >
                          Max
                        </Button>
                      </div>
                      <p className="text-sm">
                        Available:{" "}
                        {parseFloat(formatUnits(userBalance ?? 0n, 6)) >= 1
                          ? formatNumber(formatUnits(userBalance ?? 0n, 6))
                          : formatUnits(userBalance ?? 0n, 6)}{" "}
                        USDC
                      </p>
                    </div>

                    {address && metaCashbackData ? (
                      <Dialog>
                        <DialogTrigger className="w-full" asChild>
                          <Button
                            className="bg-green-400 text-white hover:bg-green-500"
                            disabled={!stakeAmount || Number.parseFloat(stakeAmount) <= 0}
                          >
                            Stake USDC
                          </Button>
                        </DialogTrigger>
                        <DialogStake
                          address={address}
                          contractAddress={metaCashbackData.address}
                          stakeAmount={stakeAmount}
                          loadingTransaction={loadingTransaction}
                          setLoadingTransaction={setLoadingTransaction}
                        />
                      </Dialog>
                    ) : (
                      <Button disabled className="mx-auto w-full">
                        <Loader className="animate-spin" /> Loading...
                      </Button>
                    )}

                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="flex justify-center">
                          <Button className="bg-gray-400 text-white hover:bg-gray-500">
                            <History />
                            View History
                          </Button>
                        </div>
                      </DialogTrigger>
                      <DialogHistory />
                    </Dialog>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-4 w-full">
          {/* Current Position */}
          {/* <Card className="bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-300 text-white">
            <CardHeader>
              <CardTitle className="text-lg">Your Position</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Staked Amount</span>
                  <span className="font-medium">${stakedAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Rewards Earned</span>
                  <span className="font-medium text-sm">${totalRewards}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Total Value</span>
                  <span className="font-bold">${(stakedAmount + totalRewards).toLocaleString()}</span>
                </div>
              </div>
              <Separator />
              <Button variant="outline" className="w-full bg-yellow-500 text-white hover:bg-yellow-600">
                <CheckCircle className="h-4 w-4 mr-2" />
                Claim Rewards
              </Button>
            </CardContent>
          </Card> */}

          {/* Pool Information */}
          {/* <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pool Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Total Pool Size</span>
                  <span className="font-medium">$2.5M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Your Share</span>
                  <span className="font-medium">0.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Pool APY</span>
                  <span className="font-medium text-green-600">{apy}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Min. Stake</span>
                  <span className="font-medium">$10 USDC</span>
                </div>
              </CardContent>
            </Card> */}

          {/* Recent Activity */}
          {/* <Card className="bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-300 text-white">
            <CardHeader>
              <CardTitle className="text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Staked $1,000 USDC</p>
                  <p className="text-xs text-white">2 days ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Claimed $25.50 rewards</p>
                  <p className="text-xs text-white">1 week ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Staked $4,000 USDC</p>
                  <p className="text-xs text-white">2 weeks ago</p>
                </div>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </main>
  );
};

export default StakingScreen;
