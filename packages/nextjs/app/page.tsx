"use client";

import Image from "next/image";
import type { NextPage } from "next";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";
import { Wallet, TrendingUp } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~~/components/shad/ui/card";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { address } = useAccount();

  const { data: userBalance } = useScaffoldReadContract({
    contractName: "USDC",
    functionName: "balanceOf",
    args: [address],
  });

return (
    <main className="flex pt-5 mx-4">
      <section className="flex justify-center items-center w-full mx-auto mt-4 px-3">
        <Card className="w-full max-w-md bg-primary">
          <CardHeader className="text-center space-y-2">
            <div className="mx-auto w-16 h-16 bg-secondary rounded-full flex items-center justify-center backdrop-blur-sm">
              <Wallet className="w-8 h-8" />
            </div>
            <CardTitle className="text-2xl font-bold ">My Balance</CardTitle>
          </CardHeader>

<CardContent className="text-center">
  <div className="bg-secondary rounded-2xl p-2 border border-secondary flex items-center justify-center space-x-2">
    <Image src={"/usdc.png"} alt="usdc icon" width={20} height={20} />
    <p className="text-4xl font-bold">${formatUnits(userBalance ?? 0n, 6)}</p>
  </div>
</CardContent>


          <CardFooter className="pt-0">
            <div className="w-full bg-secondary backdrop-blur-sm rounded-xl p-4 border border-secondary/20">
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
        </Card>
      </section>
    </main>
  )
}

export default Home;
