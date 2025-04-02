"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import {
  ArrowUpDown,
  AlertCircle,
  CheckCircle2,
  Clock,
  Download,
} from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";

// Dados simulados de pagamentos
const pagamentos = [
  {
    id: 1,
    aluno: "João Silva",
    turma: "Turma A - Manhã",
    valor: 500,
    status: "pago",
    dataVencimento: "2024-03-15",
    dataPagamento: "2024-03-10",
    formaPagamento: "PIX",
  },
  {
    id: 2,
    aluno: "Maria Santos",
    turma: "Turma B - Tarde",
    valor: 500,
    status: "atrasado",
    dataVencimento: "2024-03-10",
    dataPagamento: null,
    formaPagamento: null,
  },
  {
    id: 3,
    aluno: "Pedro Oliveira",
    turma: "Turma C - Noite",
    valor: 500,
    status: "pendente",
    dataVencimento: "2024-03-20",
    dataPagamento: null,
    formaPagamento: null,
  },
  {
    id: 4,
    aluno: "Ana Costa",
    turma: "Turma A - Manhã",
    valor: 500,
    status: "pago",
    dataVencimento: "2024-03-15",
    dataPagamento: "2024-03-12",
    formaPagamento: "Cartão de Crédito",
  },
  {
    id: 5,
    aluno: "Carlos Mendes",
    turma: "Turma B - Tarde",
    valor: 500,
    status: "pago",
    dataVencimento: "2024-03-10",
    dataPagamento: "2024-03-08",
    formaPagamento: "Transferência",
  },
  {
    id: 6,
    aluno: "Beatriz Lima",
    turma: "Turma C - Noite",
    valor: 500,
    status: "atrasado",
    dataVencimento: "2024-02-15",
    dataPagamento: null,
    formaPagamento: null,
  },
  {
    id: 7,
    aluno: "Rafael Souza",
    turma: "Turma A - Manhã",
    valor: 500,
    status: "pendente",
    dataVencimento: "2024-03-25",
    dataPagamento: null,
    formaPagamento: null,
  },
  {
    id: 8,
    aluno: "Juliana Ferreira",
    turma: "Turma B - Tarde",
    valor: 500,
    status: "pago",
    dataVencimento: "2024-03-10",
    dataPagamento: "2024-03-09",
    formaPagamento: "PIX",
  },
  {
    id: 9,
    aluno: "Lucas Almeida",
    turma: "Turma C - Noite",
    valor: 500,
    status: "atrasado",
    dataVencimento: "2024-02-20",
    dataPagamento: null,
    formaPagamento: null,
  },
  {
    id: 10,
    aluno: "Mariana Santos",
    turma: "Turma A - Manhã",
    valor: 500,
    status: "pendente",
    dataVencimento: "2024-03-30",
    dataPagamento: null,
    formaPagamento: null,
  },
];

export default function FinanceiroPage() {
  const [statusFilter, setStatusFilter] = useState<string>("todos");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Funções para cálculos
  const getTotalRecebido = () => {
    return pagamentos
      .filter((p) => p.status === "pago")
      .reduce((acc, p) => acc + p.valor, 0);
  };

  const getTotalPendente = () => {
    return pagamentos
      .filter((p) => p.status === "pendente")
      .reduce((acc, p) => acc + p.valor, 0);
  };

  const getTotalAtrasado = () => {
    return pagamentos
      .filter((p) => p.status === "atrasado")
      .reduce((acc, p) => acc + p.valor, 0);
  };

  // Função para filtrar pagamentos
  const getPagamentosFiltrados = () => {
    return pagamentos.filter((p) => {
      const matchStatus = statusFilter === "todos" || p.status === statusFilter;
      const matchSearch =
        searchQuery === "" ||
        p.aluno.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.turma.toLowerCase().includes(searchQuery.toLowerCase());
      return matchStatus && matchSearch;
    });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="fixed top-0 left-0 h-screen w-64 bg-background border-r">
        <AppSidebar />
      </div>
      <div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Financeiro</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Recebido
              </CardTitle>
              <CheckCircle2 className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                R$ {getTotalRecebido().toFixed(2)}
              </div>
              <p className="text-xs text-muted-foreground">
                Pagamentos realizados este mês
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pendentes</CardTitle>
              <Clock className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                R$ {getTotalPendente().toFixed(2)}
              </div>
              <p className="text-xs text-muted-foreground">
                Pagamentos aguardando vencimento
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Atrasados</CardTitle>
              <AlertCircle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                R$ {getTotalAtrasado().toFixed(2)}
              </div>
              <p className="text-xs text-muted-foreground">
                Pagamentos em atraso
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Pagamentos</CardTitle>
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Buscar aluno ou turma..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="max-w-sm"
                />
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filtrar por status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos</SelectItem>
                    <SelectItem value="pago">Pagos</SelectItem>
                    <SelectItem value="pendente">Pendentes</SelectItem>
                    <SelectItem value="atrasado">Atrasados</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Aluno</TableHead>
                  <TableHead>Turma</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Vencimento</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Forma de Pagamento</TableHead>
                  <TableHead>Pago em</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {getPagamentosFiltrados().map((pagamento) => (
                  <TableRow key={pagamento.id}>
                    <TableCell className="font-medium">
                      {pagamento.aluno}
                    </TableCell>
                    <TableCell>{pagamento.turma}</TableCell>
                    <TableCell>R$ {pagamento.valor.toFixed(2)}</TableCell>
                    <TableCell>
                      {new Date(pagamento.dataVencimento).toLocaleDateString(
                        "pt-BR"
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          pagamento.status === "pago"
                            ? "success"
                            : pagamento.status === "atrasado"
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {pagamento.status === "pago"
                          ? "Pago"
                          : pagamento.status === "atrasado"
                          ? "Atrasado"
                          : "Pendente"}
                      </Badge>
                    </TableCell>
                    <TableCell>{pagamento.formaPagamento || "-"}</TableCell>
                    <TableCell>
                      {pagamento.dataPagamento
                        ? new Date(pagamento.dataPagamento).toLocaleDateString(
                            "pt-BR"
                          )
                        : "-"}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ArrowUpDown className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
