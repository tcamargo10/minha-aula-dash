"use client";

import type React from "react";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, startTransition } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function StudentFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [nome, setNome] = useState(searchParams.get("nome") || "");
  const [turma, setTurma] = useState(searchParams.get("turma") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "ativo");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(() => {
      const params = new URLSearchParams();
      if (nome) params.set("nome", nome);
      if (turma) params.set("turma", turma);
      params.set("status", status);
      router.push(`/students?${params.toString()}`);
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
    >
      <Input
        type="text"
        placeholder="Buscar por nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Select value={turma} onValueChange={setTurma}>
        <SelectTrigger>
          <SelectValue placeholder="Selecionar Turma" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todas">Todas as Turmas</SelectItem>
          <SelectItem value="9A">9A</SelectItem>
          <SelectItem value="9B">9B</SelectItem>
          <SelectItem value="10A">10A</SelectItem>
          <SelectItem value="10B">10B</SelectItem>
          <SelectItem value="11A">11A</SelectItem>
          <SelectItem value="11B">11B</SelectItem>
          <SelectItem value="12A">12A</SelectItem>
          <SelectItem value="12B">12B</SelectItem>
        </SelectContent>
      </Select>
      <Select value={status} onValueChange={setStatus}>
        <SelectTrigger>
          <SelectValue placeholder="Selecionar Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ativo">Ativo</SelectItem>
          <SelectItem value="inativo">Inativo</SelectItem>
          <SelectItem value="todos">Todos</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit">Filtrar</Button>
    </form>
  );
}
