"use client";

import { ColumnDef } from "@tanstack/react-table";
import { IFinantialResponse } from "@/interfaces/finantial";

export const FinantialDataTableColumns: ColumnDef<IFinantialResponse>[] = [
  {
    accessorKey: "name",
    header: "Nome",
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div>{row.getValue("email")}</div>,
  },
  {
    accessorKey: "value",
    header: "Valor",
    cell: ({ row }) => <div>R$ {row.getValue("value").toFixed(2)}</div>,
  },
  {
    accessorKey: "expirationDate",
    header: "Vencimento",
    cell: ({ row }) => (
      <div>{new Date(row.getValue("expirationDate")).toLocaleDateString()}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <div>{row.getValue("status")}</div>,
  },
];
