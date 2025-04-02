import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { EditTurmaModal } from "./edit-turma-modal";
import { AddAlunoModal } from "./add-aluno-modal";
import { Users, Clock, Calendar } from "lucide-react";
import { use } from "react";

// Dados simulados de uma turma específica
const turma = {
  id: 1,
  nome: "Turma A",
  descricao: "Turma de programação web",
  horario: "19:00 - 22:00",
  dias: ["Segunda", "Quarta"],
  totalAlunos: 25,
  membros: [
    {
      id: 1,
      nome: "João Silva",
      email: "joao@example.com",
      tipo: "Professor",
      avatar: "https://github.com/shadcn.png",
      status: "Ativo",
    },
    {
      id: 2,
      nome: "Maria Santos",
      email: "maria@example.com",
      tipo: "Aluno",
      avatar: "https://github.com/shadcn.png",
      status: "Ativo",
    },
    // ... outros membros
  ],
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function TurmaPage({ params }: PageProps) {
  const { id } = use(params);

  return (
    <div className="flex h-full flex-col gap-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{turma.nome}</h1>
          <p className="text-muted-foreground">
            Gerencie os alunos desta turma
          </p>
        </div>
        <div className="flex gap-2">
          <AddAlunoModal turmaId={id} />
          <EditTurmaModal turma={turma} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Horário</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{turma.horario}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Dias</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{turma.dias.join(", ")}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Alunos
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{turma.totalAlunos}</div>
          </CardContent>
        </Card>
      </div>

      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Membros da Turma</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={turma.membros} />
        </CardContent>
      </Card>
    </div>
  );
}
