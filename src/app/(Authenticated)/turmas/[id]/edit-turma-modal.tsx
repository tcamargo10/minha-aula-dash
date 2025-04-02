"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface EditTurmaModalProps {
  turma: {
    id: number;
    nome: string;
    descricao: string;
    horario: string;
    dias: string[];
    totalAlunos: number;
  };
}

const DIAS_SEMANA = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo",
];

export function EditTurmaModal({ turma }: EditTurmaModalProps) {
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState(turma.nome);
  const [descricao, setDescricao] = useState(turma.descricao);
  const [horario, setHorario] = useState(turma.horario);
  const [dias, setDias] = useState<string[]>(turma.dias);

  const handleDiaChange = (dia: string) => {
    setDias((prev) =>
      prev.includes(dia) ? prev.filter((d) => d !== dia) : [...prev, dia]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar a lógica de atualização da turma
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Pencil className="mr-2 h-4 w-4" />
          Editar turma
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Editar turma</DialogTitle>
            <DialogDescription>
              Faça alterações nas informações da turma aqui. Clique em salvar
              quando terminar.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="nome">Nome da turma</Label>
              <Input
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite o nome da turma"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="descricao">Descrição</Label>
              <Input
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Digite a descrição da turma"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="horario">Horário</Label>
              <Input
                id="horario"
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
                placeholder="Digite o horário da turma"
              />
            </div>
            <div className="grid gap-2">
              <Label>Dias da semana</Label>
              <div className="grid grid-cols-2 gap-2">
                {DIAS_SEMANA.map((dia) => (
                  <div key={dia} className="flex items-center space-x-2">
                    <Checkbox
                      id={dia}
                      checked={dias.includes(dia)}
                      onCheckedChange={() => handleDiaChange(dia)}
                    />
                    <Label htmlFor={dia}>{dia}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Salvar alterações</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
