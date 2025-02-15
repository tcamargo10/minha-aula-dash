"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  GraduationCap,
  DollarSign,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

const dadosFinanceiros = [
  { mes: "Jan", recebido: 4000, pendente: 2400, atrasado: 1000 },
  { mes: "Fev", recebido: 3000, pendente: 1398, atrasado: 800 },
  { mes: "Mar", recebido: 2000, pendente: 9800, atrasado: 1200 },
  { mes: "Abr", recebido: 2780, pendente: 3908, atrasado: 500 },
  { mes: "Mai", recebido: 1890, pendente: 4800, atrasado: 300 },
  { mes: "Jun", recebido: 2390, pendente: 3800, atrasado: 700 },
];

const alunosRecentes = [
  {
    id: 1,
    nome: "Alice Silva",
    email: "alice@exemplo.com",
    dataMatricula: "15/06/2023",
  },
  {
    id: 2,
    nome: "Bruno Santos",
    email: "bruno@exemplo.com",
    dataMatricula: "14/06/2023",
  },
  {
    id: 3,
    nome: "Carla Oliveira",
    email: "carla@exemplo.com",
    dataMatricula: "13/06/2023",
  },
  {
    id: 4,
    nome: "Daniel Lima",
    email: "daniel@exemplo.com",
    dataMatricula: "12/06/2023",
  },
  {
    id: 5,
    nome: "Eduarda Costa",
    email: "eduarda@exemplo.com",
    dataMatricula: "11/06/2023",
  },
];

export default function DashboardContent() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <h1 className="text-3xl font-bold tracking-tight">Painel de Controle</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Alunos
            </CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.234</div>
            <p className="text-xs text-muted-foreground">
              +20% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Valor a Receber
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 12.345</div>
            <p className="text-xs text-muted-foreground">
              +15% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pagamentos Atrasados
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 2.345</div>
            <p className="text-xs text-muted-foreground">
              +5% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pagamentos Recebidos
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 45.678</div>
            <p className="text-xs text-muted-foreground">
              +25% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Visão Geral Financeira</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={dadosFinanceiros}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="recebido" fill="#8884d8" name="Recebido" />
                <Bar dataKey="pendente" fill="#82ca9d" name="Pendente" />
                <Bar dataKey="atrasado" fill="#ffc658" name="Atrasado" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Aulas de Hoje</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={new Date()}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Alunos Recentemente Matriculados</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>E-mail</TableHead>
                <TableHead>Data de Matrícula</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {alunosRecentes.map((aluno) => (
                <TableRow key={aluno.id}>
                  <TableCell>{aluno.nome}</TableCell>
                  <TableCell>{aluno.email}</TableCell>
                  <TableCell>{aluno.dataMatricula}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
