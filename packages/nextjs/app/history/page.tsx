"use client";

import HistoryTable from "./_components/HistoryTable";
import { ColumnDef } from "@tanstack/react-table";
import { NextPage } from "next";
import { useAccount, useBlock } from "wagmi";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

const History: NextPage = () => {
  const { address } = useAccount();
  const { data } = useBlock();

  const {
    data: events,
    // isLoading: isLoadingEvents,
    // error: errorReadingEvents,
  } = useScaffoldEventHistory({
    contractName: "USDC",
    eventName: "Transfer",
    fromBlock: data?.number ?? 22660937n - 40000n,
    watch: true,
    filters: { from: address },
    blockData: true,
    transactionData: true,
    receiptData: true,
  });

  console.log(events);
  console.log(data?.number);

  type Payment = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
  };

  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "amount",
      header: "Amount",
    },
  ];

  const payments: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
  ];

  return (
    <main className="pt-5">
      <h1 className="text-center text-2xl font-bold">Transaction History</h1>

      <section className="mt-5 mx-2">
        <HistoryTable columns={columns} data={payments} />
      </section>
    </main>
  );
};

export default History;
