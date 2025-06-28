import { ExternalLink } from "lucide-react";
import { NextPage } from "next";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "~~/components/shad/ui/dialog";
import { ScrollArea } from "~~/components/shad/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~~/components/shad/ui/table";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth/useScaffoldEventHistory";

const DialogHistory: NextPage = () => {
  const { address } = useAccount();

  //smart contract
  const { data: events } = useScaffoldEventHistory({
    contractName: "MetaCashback",
    eventName: "Staking",
    fromBlock: 137559986n,
    watch: true,
    filters: { user: address },
    blockData: true,
    transactionData: true,
    receiptData: true,
  });

  return (
    <DialogContent className="bg-secondary">
      <DialogHeader>
        <DialogTitle>Staking History</DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>
      <ScrollArea className="h-[400px]">
        <Table>
          <TableCaption>A list of your recent stakings.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>More Info</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events?.map((x, y) => (
              <TableRow key={y}>
                <TableCell>
                  {new Date(parseFloat(x.args.timeStamp?.toString() ?? "0") * 1000).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "2-digit",
                  })}
                </TableCell>
                <TableCell>Success</TableCell>
                <TableCell>{formatUnits(x.args.amount ?? 0n, 6)} USDC</TableCell>
                <TableCell>
                  <a
                    href={`https://optimistic.etherscan.io/tx/${x.transactionHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-5 h-5" /> See
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </DialogContent>
  );
};

export default DialogHistory;
