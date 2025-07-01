import { ExternalLink } from "lucide-react";
import { NextPage } from "next";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";

// UI Components
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~~/components/shad/ui/dialog";
import { ScrollArea } from "~~/components/shad/ui/scroll-area";
import { Skeleton } from "~~/components/shad/ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~~/components/shad/ui/table";

// Hooks
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth/useScaffoldEventHistory";

const DialogHistory: NextPage = () => {
  const { address } = useAccount();

  const { data: events, isLoading } = useScaffoldEventHistory({
    contractName: "MetaCashback",
    eventName: "Staking",
    fromBlock: 137559986n,
    watch: true,
    filters: { user: address },
    blockData: true,
    transactionData: true,
    receiptData: true,
  });

  const formatDate = (timestamp?: bigint) => {
    if (!timestamp) return "N/A";
    const date = new Date(Number(timestamp) * 1000);
    return new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    }).format(date);
  };

  return (
    <DialogContent className="bg-secondary">
      <DialogHeader>
        <DialogTitle>Staking History</DialogTitle>
        <DialogDescription>Track your recent staking activity on-chain.</DialogDescription>
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
            {isLoading || !events ? (
              <TableRow>
                <TableCell colSpan={4}>
                  <Skeleton className="w-full h-52" />
                </TableCell>
              </TableRow>
            ) : (
              events.map((event, index) => (
                <TableRow key={index}>
                  <TableCell>{formatDate(event?.args?.timeStamp)}</TableCell>
                  <TableCell className="text-green-600 font-medium">Success</TableCell>
                  <TableCell>
                    {formatUnits(event?.args?.amount ?? 0n, 6)} <span className="text-muted-foreground">USDC</span>
                  </TableCell>
                  <TableCell>
                    <a
                      href={`https://optimistic.etherscan.io/tx/${event?.transactionHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:underline"
                    >
                      <ExternalLink className="w-5 h-5" /> View
                    </a>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </ScrollArea>
    </DialogContent>
  );
};

export default DialogHistory;
