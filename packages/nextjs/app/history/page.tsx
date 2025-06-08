"use client";

// import { useEffect, useState } from "react";
// import HistoryTable from "./_components/HistoryTable";
import { useEffect, useState } from "react";
import HistoryTable from "./_components/HistoryTable";
import { NextPage } from "next";
import { useBlock } from "wagmi";
import { Skeleton } from "~~/components/shad/ui/skeleton";
// import { Skeleton } from "~~/components/shad/ui/skeleton";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";
import { ItransferEvent, ItransferEventParsed } from "~~/types/event.entity";

const History: NextPage = () => {
  // const { address } = useAccount();
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
    // filters: { from: address },
    blockData: true,
    transactionData: true,
    receiptData: true,
  });

  //PONER TIPADO NECESARIO A LA TABLA Y LUEGO MODO ZEBRA Y CONTINUAR CON LA VIDA
  //PARA COMPONENTES INSTALAR DE SHADCN USAR npx install ....
  //RECUERDA EL COMPONENT DROPWMENU NO TIENEN STYLS

  useEffect(() => {
    if (events === undefined) return;
    const eventData = events as unknown as ItransferEvent[];

    const parsedEvents: ItransferEventParsed[] = eventData.map(x => {
      return {
        to: x.args.to ?? "0x",
        value: x.args.value ?? 0n,
        blockHash: x.blockHash ?? "0x",
      };
    });

    setHistoryEvent(parsedEvents);

    console.log(parsedEvents);
  }, [, events]);

  return (
    <main className="pt-5">
      <h1 className="text-center text-2xl font-bold">Transaction History</h1>

      <section className="mt-5 mx-2">
        {historyEvent === undefined ? <Skeleton /> : <HistoryTable data={historyEvent.slice(0, 100)} />}
      </section>
    </main>
  );
};

export default History;

// historyEvent.slice(0, 100).map((x, y: number) => {
//   const allData: IParsedTransfer[] = [
//     {
//       address: x?.address ?? "0x",
//       from: x.args.from,
//       to: x.args.to,
//       value: x.args.value,
//     },
//   ];
//   return <HistoryTable key={y} columns={columns} data={allData} />;
// })
// )}
