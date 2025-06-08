"use client";

import Image from "next/image";
import type { NextPage } from "next";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";
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
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl text-center font-bold">My balance</CardTitle>
            <div className="flex w-full justify-center items-center gap-2">
              <Image src={"/usdc.png"} alt="usdc icon" width={20} height={20} />
              <p className="text-lg text-center font-semibold">{formatUnits(userBalance ?? 0n, 6)} USDC</p>
            </div>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-between items-center">
            {/* <p>Ganain de la semana: 15 USDC</p> */}
          </CardFooter>
        </Card>
      </section>
    </main>
  );
};

export default Home;
