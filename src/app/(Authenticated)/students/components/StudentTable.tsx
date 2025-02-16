"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IStudent } from "@/interfaces/student";
import { getStudents } from "@/mocks";

export default function StudentTable({
  initialStudents,
}: {
  initialStudents: IStudent[];
}) {
  const [students, setStudents] = useState(initialStudents);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchStudents = async () => {
      const updatedStudents = await getStudents(
        Object.fromEntries(searchParams)
      );
      setStudents(updatedStudents);
    };
    fetchStudents();
  }, [searchParams]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Avatar</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Idade</TableHead>
          <TableHead>Turma</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((student) => (
          <TableRow key={student.id}>
            <TableCell>
              <Avatar>
                <AvatarImage
                  src={student.avatar}
                  alt={`Avatar de ${student.nome}`}
                />
                <AvatarFallback>
                  {student.nome.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell className="font-medium">{student.nome}</TableCell>
            <TableCell>{student.idade}</TableCell>
            <TableCell>{student.turma}</TableCell>
            <TableCell>
              <span
                className={`px-2 py-1 rounded ${
                  student.status === "ativo"
                    ? "bg-green-200 text-green-800"
                    : "bg-red-200 text-red-800"
                }`}
              >
                {student.status === "ativo" ? "Ativo" : "Inativo"}
              </span>
            </TableCell>
            <TableCell className="text-right">
              <Button asChild variant="link">
                <Link href={`/students/${student.id}`}>Detalhes</Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
