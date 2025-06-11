"use client";

import { RainbowKitCustomConnectButton } from "./scaffold-eth";
import { NextPage } from "next";

const LandingPage: NextPage = () => {
  return (
    <main className="flex justify-center items-center h-full relative w-full flex-col">
      <h1 className="mt-40 text-4xl font-bold mb-10">Meta Cashback</h1>
      <RainbowKitCustomConnectButton />
    </main>
  );
};
export default LandingPage;
