"use client";

import { useEffect, useState } from "react";
import HistoryTable from "./_components/HistoryTable";
import { NextPage } from "next";
import { useAccount } from "wagmi";
import { Skeleton } from "~~/components/shad/ui/skeleton";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";
import { ItransferEvent, ItransferEventParsed } from "~~/types/event.entity";

const History: NextPage = () => {
  const { address } = useAccount();

  //states
  const [historyEvent, setHistoryEvent] = useState<ItransferEventParsed[] | undefined>(undefined);

  const {
    data: events,
    // isLoading: isLoadingEvents,
    // error: errorReadingEvents,
  } = useScaffoldEventHistory({
    contractName: "USDC",
    eventName: "Transfer",
    fromBlock: 136681562n,
    watch: true,
    filters: { from: address },
    blockData: true,
    transactionData: true,
    receiptData: true,
  });

  useEffect(() => {
    if (events === undefined) return;
    const eventData = events as unknown as ItransferEvent[];
    if (eventData.length === 0 || eventData[0] === undefined) return;

    const parsedEvents: ItransferEventParsed[] = eventData.map(x => {
      console.log(new Date(Number(x.blockData.timestamp) * 1000));
      return {
        to: x.args.to ?? "0x",
        value: x.args.value ?? 0n,
        transactionHash: x.transactionHash ?? "0x",
      };
    });

    setHistoryEvent(parsedEvents);
  }, [, events]);

  return (
    <main className="pt-5">
      <section className="mt-5 mx-2">
        {historyEvent === undefined ? (
          <Skeleton className="w-full h-96" />
        ) : historyEvent.length > 0 ? (
          <HistoryTable data={historyEvent} />
        ) : (
          <h2 className="text-center text-2xl font-semibold">No transfers yet</h2>
        )}
      </section>
    </main>
  );
};

export default History;
