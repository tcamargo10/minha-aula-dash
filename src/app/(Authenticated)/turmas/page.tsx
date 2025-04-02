import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { NewTurmaModal } from "./new-turma-modal";
import { Users, Clock, Calendar } from "lucide-react";

// Dados simulados de turmas
const turmas = [
  {
    id: 1,
    nome: "Turma A - Manhã",
    professor: "João Silva",
    alunos: 25,
    horario: "08:00 - 12:00",
    dias: ["Segunda", "Quarta", "Sexta"],
  },
  {
    id: 2,
    nome: "Turma B - Tarde",
    professor: "Maria Santos",
    alunos: 20,
    horario: "14:00 - 18:00",
    dias: ["Terça", "Quinta"],
  },
  {
    id: 3,
    nome: "Turma C - Noite",
    professor: "Pedro Oliveira",
    alunos: 18,
    horario: "19:00 - 23:00",
    dias: ["Segunda", "Quarta"],
  },
];

export default function TurmasPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Turmas</h1>
            <p className="text-muted-foreground">
              Gerencie suas turmas e alunos
            </p>
          </div>
          <NewTurmaModal />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {turmas.map((turma) => (
            <Link key={turma.id} href={`/turmas/${turma.id}`}>
              <Card className="hover:bg-accent/50 transition-colors cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{turma.nome}</CardTitle>
                    <Badge
                      variant="secondary"
                      className="group-hover:bg-secondary/80"
                    >
                      {turma.alunos} alunos
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Professor:</span>
                      <span className="font-medium">{turma.professor}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Horário:</span>
                      <span className="font-medium">{turma.horario}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Dias:</span>
                      <span className="font-medium">
                        {turma.dias.join(", ")}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
