"use client";

import { useEffect, useState } from "react";
import HistoryTable from "./_components/HistoryTable";
import { NextPage } from "next";
import { useBlock } from "wagmi";
import { Skeleton } from "~~/components/shad/ui/skeleton";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";
import { ItransferEvent, ItransferEventParsed } from "~~/types/event.entity";

const History: NextPage = () => {
  const { data } = useBlock();

  const [historyEvent, setHistoryEvent] = useState<ItransferEventParsed[] | undefined>(undefined);

  const {
    data: events,
    // isLoading: isLoadingEvents,
    // error: errorReadingEvents,
  } = useScaffoldEventHistory({
    contractName: "USDC",
    eventName: "Transfer",
    // fromBlock: data?.number ?? 22660937n - 40000n,
    fromBlock: data?.number ?? 22660937n - 10000n,
    watch: true,
    // filters: { from: "0x40DC31da1209E963d59CAC8221BB542382788738" },
    blockData: true,
    transactionData: true,
    receiptData: true,
  });

  useEffect(() => {
    if (events === undefined) return;
    const eventData = events as unknown as ItransferEvent[];
    if (eventData.length === 0 || eventData[0] === undefined) return;

    console.log(eventData);
    const parsedEvents: ItransferEventParsed[] = eventData.map(x => {
      return {
        to: x.args.to ?? "0x",
        value: x.args.value ?? 0n,
        transactionHash: x.transactionHash ?? "0x",
      };
    });

    setHistoryEvent(parsedEvents);

    console.log(parsedEvents);
  }, [, events]);

  return (
    <main className="pt-5">
      <section className="mt-5 mx-2">
        {historyEvent === undefined ? <Skeleton /> : <HistoryTable data={historyEvent.slice(0, 100)} />}
      </section>
    </main>
  );
};

export default History;
