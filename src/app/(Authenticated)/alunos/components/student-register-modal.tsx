"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";

export function StudentRegisterModal() {
  const [cpf, setCpf] = useState("");
  const [studentData, setStudentData] = useState<{
    nome: string;
    idade: string;
  } | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = async () => {
    // Simulação de busca de dados do aluno
    // Aqui você implementaria a chamada real à API
    setStudentData({
      nome: "João Silva",
      idade: "20",
    });
  };

  const handleConfirm = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary/90">
          Cadastrar Novo Aluno
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Cadastrar Novo Aluno
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="cpf" className="text-base">
              CPF
            </Label>
            <div className="flex gap-2">
              <Input
                id="cpf"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                placeholder="Digite o CPF"
                className="flex-1"
              />
              <Button
                onClick={handleSearch}
                variant="outline"
                size="icon"
                className="shrink-0"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {studentData && (
            <div className="space-y-4 rounded-lg border p-4">
              <div className="space-y-2">
                <Label className="text-sm text-muted-foreground">Nome</Label>
                <div className="text-base font-medium">{studentData.nome}</div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm text-muted-foreground">Idade</Label>
                <div className="text-base font-medium">{studentData.idade}</div>
              </div>
            </div>
          )}
        </div>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancelar
          </Button>
          <Button
            onClick={handleConfirm}
            className="bg-primary hover:bg-primary/90"
          >
            Confirmar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
