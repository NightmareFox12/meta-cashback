"use client";

import type { NextPage } from "next";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~~/components/shad/ui/card";
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
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl text-center font-bold">My balance</CardTitle>
            <CardDescription className="text-center text-lg *:text-primary"></CardDescription>
            <p className="text-lg text-center font-semibold">{formatUnits(userBalance ?? 0n, 6)}</p>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-between items-center">
            <p>Ganain de la semana: 15 USDC</p>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
};

export default Home;
