"use client";

import { NextPage } from "next";
import { useEffect } from "react";
import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";
import { useAccount, useClient, useWatchPendingTransactions } from "wagmi";

const History: NextPage = () => {
  const {address} = useAccount()

  const client = createPublicClient({
    chain: sepolia,
    transport: http(),
  });



  return (

    <main>
      <h1>Transaction History {23}</h1>
    </main>
  );
};

export default History;
