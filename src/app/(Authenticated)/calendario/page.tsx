"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Clock, Users, Calendar as CalendarIcon, Link } from "lucide-react";

// Dados simulados de turmas
const turmas = [
  {
    id: 1,
    nome: "Turma A - Manhã",
    professor: "João Silva",
    alunos: 25,
    horario: "08:00 - 12:00",
    dias: ["Segunda", "Quarta", "Sexta"],
    local: "Sala 101",
    link: "https://meet.google.com/abc-defg-hij",
  },
  {
    id: 2,
    nome: "Turma B - Tarde",
    professor: "Maria Santos",
    alunos: 20,
    horario: "14:00 - 18:00",
    dias: ["Terça", "Quinta"],
    local: "Sala 102",
    link: "https://meet.google.com/klm-nopq-rst",
  },
  {
    id: 3,
    nome: "Turma C - Noite",
    professor: "Pedro Oliveira",
    alunos: 18,
    horario: "19:00 - 23:00",
    dias: ["Segunda", "Quarta"],
    local: "Sala 103",
    link: "https://meet.google.com/uvw-xyza-bcd",
  },
];

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Função para obter as turmas de um dia específico
  const getTurmasForDay = (date: Date) => {
    const daysOfWeek = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ];
    const dayName = daysOfWeek[date.getDay()];
    return turmas.filter((turma) => turma.dias.includes(dayName));
  };

  // Função para obter o total de alunos em um dia
  const getTotalAlunos = (date: Date) => {
    return getTurmasForDay(date).reduce((acc, turma) => acc + turma.alunos, 0);
  };

  // Função para obter o total de turmas em um dia
  const getTotalTurmas = (date: Date) => {
    return getTurmasForDay(date).length;
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Calendário</h1>
        <div className="flex items-center gap-2 text-muted-foreground">
          <CalendarIcon className="h-4 w-4" />
          <span>Visualize todas as aulas programadas</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Calendário de Aulas</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex items-center justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <div className="space-y-4 flex flex-col">
          {date && (
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Resumo do Dia</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">
                        {getTotalAlunos(date)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Total de Alunos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">
                        {getTotalTurmas(date)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Turmas Ativas
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="flex-1">
            <CardHeader>
              <CardTitle>
                Aulas para{" "}
                {date?.toLocaleDateString("pt-BR", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {date ? (
                <div className="space-y-2">
                  {getTurmasForDay(date).map((turma) => (
                    <div
                      key={turma.id}
                      className="flex flex-col gap-2 p-3 rounded-lg bg-muted/50"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">{turma.nome}</p>
                          <p className="text-xs text-muted-foreground">
                            {turma.professor}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{turma.horario}</p>
                          <p className="text-xs text-muted-foreground">
                            {turma.alunos} alunos
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{turma.local}</span>
                        <a
                          href={turma.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 hover:text-primary transition-colors"
                        >
                          <Link className="h-3 w-3" />
                          Link da Aula
                        </a>
                      </div>
                    </div>
                  ))}
                  {getTurmasForDay(date).length === 0 && (
                    <p className="text-center text-muted-foreground py-4">
                      Nenhuma aula programada para este dia
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-center text-muted-foreground py-4">
                  Selecione uma data no calendário para ver as aulas
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
