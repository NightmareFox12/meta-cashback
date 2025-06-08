"use client";

import Image from "next/image";
import Link from "next/link";
import { ChartTooltipIndicatorLine } from "./charteeeee";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import type { NextPage } from "next";
import { formatEther } from "viem";
import { useAccount, useBalance } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address, Balance } from "~~/components/scaffold-eth";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~~/components/shad/ui/card";
import { useWatchBalance } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const { data } = useWatchBalance({ address: connectedAddress });

  return (
    <main className="flex pt-5 mx-4">
      {/* <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Scaffold-ETH 2</span>
          </h1>
          <div className="flex justify-center items-center space-x-2 flex-col">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>

          <p className="text-center text-lg">
            Get started by editing{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/nextjs/app/page.tsx
            </code>
          </p>
          <p className="text-center text-lg">
            Edit your smart contract{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              YourContract.sol
            </code>{" "}
            in{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/hardhat/contracts
            </code>
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col md:flex-row">

            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>

            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
            
          </div>
        </div>
      </div> */}
      <section className="flex justify-center items-center w-full mx-auto mt-4 px-3">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl text-center font-bold">My balance</CardTitle>
            <CardDescription className="text-center text-lg *:text-primary"></CardDescription>
            <p className="text-lg text-center font-semibold">
              {formatEther(data?.value ?? 0n).substring(0, 6)} {data?.symbol.toString()}
            </p>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-between items-center">
            <p>Ganain de la semana: 15 USDC</p>
          </CardFooter>
        </Card>
      </section>
      <ChartTooltipIndicatorLine />
    </main>
  );
};

export default Home;
