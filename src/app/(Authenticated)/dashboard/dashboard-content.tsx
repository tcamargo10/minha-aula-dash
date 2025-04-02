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
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import {
  GraduationCap,
  DollarSign,
  AlertCircle,
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const dadosFinanceiros = [
  { mes: "Jan", recebido: 4000, pendente: 2400, atrasado: 1000 },
  { mes: "Fev", recebido: 3000, pendente: 1398, atrasado: 800 },
  { mes: "Mar", recebido: 2000, pendente: 9800, atrasado: 1200 },
  { mes: "Abr", recebido: 2780, pendente: 3908, atrasado: 500 },
  { mes: "Mai", recebido: 1890, pendente: 4800, atrasado: 300 },
  { mes: "Jun", recebido: 2390, pendente: 3800, atrasado: 700 },
];

const dadosMatriculas = [
  { mes: "Jan", matriculas: 45 },
  { mes: "Fev", matriculas: 52 },
  { mes: "Mar", matriculas: 38 },
  { mes: "Abr", matriculas: 64 },
  { mes: "Mai", matriculas: 58 },
  { mes: "Jun", matriculas: 72 },
];

const alunosRecentes = [
  {
    id: 1,
    nome: "Alice Silva",
    email: "alice@exemplo.com",
    dataMatricula: "15/06/2023",
    turma: "9A",
    status: "ativo",
  },
  {
    id: 2,
    nome: "Bruno Santos",
    email: "bruno@exemplo.com",
    dataMatricula: "14/06/2023",
    turma: "10B",
    status: "ativo",
  },
  {
    id: 3,
    nome: "Carla Oliveira",
    email: "carla@exemplo.com",
    dataMatricula: "13/06/2023",
    turma: "11C",
    status: "ativo",
  },
  {
    id: 4,
    nome: "Daniel Lima",
    email: "daniel@exemplo.com",
    dataMatricula: "12/06/2023",
    turma: "12A",
    status: "ativo",
  },
  {
    id: 5,
    nome: "Eduarda Costa",
    email: "eduarda@exemplo.com",
    dataMatricula: "11/06/2023",
    turma: "9B",
    status: "ativo",
  },
];

const proximasAulas = [
  {
    id: 1,
    turma: "9A",
    horario: "08:00 - 09:30",
    materia: "Matemática",
    professor: "João Silva",
  },
  {
    id: 2,
    turma: "10B",
    horario: "09:30 - 11:00",
    materia: "Física",
    professor: "Maria Santos",
  },
  {
    id: 3,
    turma: "11C",
    horario: "11:00 - 12:30",
    materia: "Química",
    professor: "Pedro Oliveira",
  },
];

export default function DashboardContent() {
  return (
    <div className="flex-1 space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Painel de Controle
          </h1>
          <p className="text-muted-foreground">Visão geral do sistema</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            Última atualização: {new Date().toLocaleString()}
          </Badge>
        </div>
      </div>

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
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
              +20% em relação ao mês passado
            </div>
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
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
              +15% em relação ao mês passado
            </div>
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
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
              +5% em relação ao mês passado
            </div>
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
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
              +25% em relação ao mês passado
            </div>
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
                <Bar dataKey="recebido" fill="#22c55e" name="Recebido" />
                <Bar dataKey="pendente" fill="#eab308" name="Pendente" />
                <Bar dataKey="atrasado" fill="#ef4444" name="Atrasado" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Aulas de Hoje</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {proximasAulas.map((aula) => (
                <div
                  key={aula.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                >
                  <div>
                    <p className="text-sm font-medium">{aula.turma}</p>
                    <p className="text-xs text-muted-foreground">
                      {aula.materia} - {aula.professor}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{aula.horario}</p>
                    <p className="text-xs text-muted-foreground">Hoje</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Evolução de Matrículas</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dadosMatriculas}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="matriculas"
                  stroke="#3b82f6"
                  name="Matrículas"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Alunos Recentemente Matriculados</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Turma</TableHead>
                  <TableHead>Data de Matrícula</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {alunosRecentes.map((aluno) => (
                  <TableRow key={aluno.id}>
                    <TableCell className="font-medium">{aluno.nome}</TableCell>
                    <TableCell>{aluno.turma}</TableCell>
                    <TableCell>{aluno.dataMatricula}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          aluno.status === "ativo" ? "success" : "destructive"
                        }
                      >
                        {aluno.status === "ativo" ? "Ativo" : "Inativo"}
                      </Badge>
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
