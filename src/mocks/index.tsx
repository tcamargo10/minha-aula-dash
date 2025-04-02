import type { IStudent } from "@/interfaces/student";

export async function getStudents(): Promise<IStudent[]> {
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

  return allStudents;
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

export const mockPayments = [
  { id: 1, date: "2023-01-15", amount: 250, status: "Pago" },
  { id: 2, date: "2023-02-15", amount: 250, status: "Pago" },
  { id: 3, date: "2023-03-15", amount: 250, status: "Pendente" },
  { id: 4, date: "2023-04-15", amount: 250, status: "Pago" },
  { id: 5, date: "2023-05-15", amount: 250, status: "Pendente" },
];

export const mockClasses = [
  { id: 1, date: "2023-03-01", subject: "Matemática", attendance: "Presente" },
  { id: 2, date: "2023-03-03", subject: "Português", attendance: "Ausente" },
  { id: 3, date: "2023-03-05", subject: "História", attendance: "Presente" },
  { id: 4, date: "2023-03-08", subject: "Ciências", attendance: "Presente" },
  { id: 5, date: "2023-03-10", subject: "Geografia", attendance: "Presente" },
];

export async function getPaymentHistory(studentId: string) {
  // Simulating an API call
  await new Promise((resolve) => setTimeout(resolve, 500));

  console.log(studentId);
  // In a real application, you would fetch this data from your API
  // based on the studentId
  return mockPayments;
}

export async function getClassHistory(studentId: string) {
  // Simulating an API call
  await new Promise((resolve) => setTimeout(resolve, 500));

  console.log(studentId);

  // In a real application, you would fetch this data from your API
  // based on the studentId
  return mockClasses;
}

export type Student = {
  id: number;
  name: string;
  email: string;
  status: "ativo" | "inativo";
  turma: string;
  telefone: string;
  alunoDesde: string;
};

// Função mock para simular busca de dados
export async function fetchStudents(): Promise<Student[]> {
  // Substitua isso por uma chamada real à API ou consulta ao banco de dados
  return [
    {
      id: 1,
      name: "João Silva",
      email: "joao@example.com",
      status: "ativo",
      turma: "9A",
      telefone: "(11) 1234-5678",
      alunoDesde: "01/01/2023",
    },
    {
      id: 2,
      name: "Maria Santos",
      email: "maria@example.com",
      status: "ativo",
      turma: "10B",
      telefone: "(11) 2345-6789",
      alunoDesde: "15/02/2023",
    },
    {
      id: 3,
      name: "Pedro Oliveira",
      email: "pedro@example.com",
      status: "inativo",
      turma: "11C",
      telefone: "(11) 3456-7890",
      alunoDesde: "01/03/2023",
    },
    {
      id: 4,
      name: "Ana Rodrigues",
      email: "ana@example.com",
      status: "ativo",
      turma: "12A",
      telefone: "(11) 4567-8901",
      alunoDesde: "15/04/2023",
    },
    {
      id: 5,
      name: "Carlos Ferreira",
      email: "carlos@example.com",
      status: "inativo",
      turma: "9B",
      telefone: "(11) 5678-9012",
      alunoDesde: "01/05/2023",
    },
  ];
}

export function mockFinancialCards() {
  return { received: 1512, pending: 123, overdue: 2340 };
}

export const Mockstudents: IStudent[] = [
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
