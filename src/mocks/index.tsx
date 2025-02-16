"use server";

import type { IStudent } from "@/interfaces/student";

export async function getStudents(searchParams: {
  [key: string]: string | string[] | undefined;
}): Promise<IStudent[]> {
  const nome = searchParams.nome as string | undefined;
  const turma = searchParams.turma as string | undefined;
  const status = (searchParams.status as string) || "ativo";

  // Simulating an API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // This is where you'd typically fetch data from your API
  const allStudents: IStudent[] = [
    {
      id: "1",
      avatar: "/avatars/01.png",
      nome: "Alice Silva",
      idade: 15,
      turma: "9A",
      status: "ativo",
    },
    {
      id: "2",
      avatar: "/avatars/02.png",
      nome: "Bruno Santos",
      idade: 16,
      turma: "10B",
      status: "ativo",
    },
    {
      id: "3",
      avatar: "/avatars/03.png",
      nome: "Carla Oliveira",
      idade: 17,
      turma: "11C",
      status: "inativo",
    },
    {
      id: "4",
      avatar: "/avatars/04.png",
      nome: "Daniel Lima",
      idade: 18,
      turma: "12A",
      status: "ativo",
    },
    {
      id: "5",
      avatar: "/avatars/05.png",
      nome: "Eva Martins",
      idade: 15,
      turma: "9B",
      status: "inativo",
    },
  ];

  return allStudents.filter(
    (student) =>
      (!nome || student.nome.toLowerCase().includes(nome.toLowerCase())) &&
      (!turma || student.turma === turma) &&
      (status === "todos" || student.status === status)
  );
}

export async function getStudentById(id: string): Promise<IStudent | null> {
  // Simulating an API call
  await new Promise((resolve) => setTimeout(resolve, 500));

  // This is where you'd typically fetch data from your API
  const allStudents: IStudent[] = [
    {
      id: "1",
      avatar: "/avatars/01.png",
      nome: "Alice Silva",
      idade: 15,
      turma: "9A",
      status: "ativo",
    },
    {
      id: "2",
      avatar: "/avatars/02.png",
      nome: "Bruno Santos",
      idade: 16,
      turma: "10B",
      status: "ativo",
    },
    {
      id: "3",
      avatar: "/avatars/03.png",
      nome: "Carla Oliveira",
      idade: 17,
      turma: "11C",
      status: "inativo",
    },
    {
      id: "4",
      avatar: "/avatars/04.png",
      nome: "Daniel Lima",
      idade: 18,
      turma: "12A",
      status: "ativo",
    },
    {
      id: "5",
      avatar: "/avatars/05.png",
      nome: "Eva Martins",
      idade: 15,
      turma: "9B",
      status: "inativo",
    },
  ];

  return allStudents.find((student) => student.id === id) || null;
}
