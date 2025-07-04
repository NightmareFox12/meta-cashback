"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, Database, ExternalLink } from "lucide-react";
import { NextPage } from "next";
import { formatUnits } from "viem";
import { Button } from "~~/components/shad/ui/button";
import { Input } from "~~/components/shad/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~~/components/shad/ui/table";
import { ItransferEventParsed } from "~~/types/event.entity";

const columns: ColumnDef<ItransferEventParsed>[] = [
  {
    accessorKey: "to",
    header: "To",
    cell: ({ row }) => <div className="capitalize">{row.getValue("to")}</div>,
  },
  {
    accessorKey: "transactionHash",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Transaction Hash
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <a
        href={`https://optimistic.etherscan.io/tx/${row.getValue("transactionHash")}`}
        className="cursor-pointer underline flex gap-2 items-center"
        target="_BLANK"
      >
        {row.getValue("transactionHash")}
        <ExternalLink className="w-3 h-3" />
      </a>
    ),
  },
  {
    accessorKey: "value",
    header: () => <div className="text-center">Amount</div>,
    cell: ({ row }) => {
      const value = BigInt(row.getValue("value"));
      const formatValue = formatUnits(value, 6);

      return <div className="text-center font-medium">{formatValue} USDC</div>;
    },
  },
];

type HistoryTableProps = {
  data: ItransferEventParsed[];
};

const HistoryTable: NextPage<HistoryTableProps> = ({ data }) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-300 rounded-2xl p-6 border border-primary/20">
      {/* Header Section */}
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <Database className="w-5 h-5 text-warning" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Transaction History</h2>
            <p className="text-sm text-white">Track your recent transfers and transactions</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative flex-1 max-w-sm">
            <Input
              placeholder="Filter transactions..."
              value={(table.getColumn("to")?.getFilterValue() as string) ?? ""}
              onChange={event => table.getColumn("to")?.setFilterValue(event.target.value)}
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-gray-900 p-4 text-white rounded-lg shadow-lg opacity-100 backdrop-blur-none z-50 isolate"
            >
              {table
                .getAllColumns()
                .filter(column => column.getCanHide())
                .map(column => (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={value => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Table Container */}
      <div className="rounded-xl border border-primary/20 bg-secondary/70 shadow-lg">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow
                key={headerGroup.id}
                className="bg-gradient-to-r from-primary/15 to-secondary/15 border-b border-primary/20 hover:bg-primary/20 transition-colors"
              >
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead key={header.id} className="font-bold py-4 px-6">
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id} className="py-4 px-6">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-32 text-center text-primary/60 bg-secondary/5">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Database className="w-8 h-8 text-primary/40" />
                    </div>
                    <div>
                      <p className="font-semibold">No transactions found</p>
                      <p className="text-sm">Your transaction history will appear here</p>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Footer Controls */}
      <div className="flex items-center justify-between pt-6">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HistoryTable;
