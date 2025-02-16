import { Suspense } from "react";
import { notFound } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getStudentById } from "@/mocks";
import PaymentHistory from "./components/PaymentHistory";
import StudentDetails from "./components/StudentDetails";
import ClassHistory from "./components/ClassHistory";

export default async function StudentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const studentId = (await params).id;
  const student = await getStudentById(studentId);

  if (!student) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="w-20 h-20">
          <AvatarImage src={student.avatar} alt={`Avatar de ${student.nome}`} />
          <AvatarFallback>
            {student.nome.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold">{student.nome}</h1>
          <p className="text-muted-foreground">ID: {student.id}</p>
        </div>
      </div>

      <Tabs defaultValue="details">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="details">Detalhes</TabsTrigger>
          <TabsTrigger value="payments">Histórico de Pagamentos</TabsTrigger>
          <TabsTrigger value="classes">Histórico de Aulas</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <Suspense fallback={<div>Carregando detalhes do aluno...</div>}>
            <StudentDetails student={student} />
          </Suspense>
        </TabsContent>
        <TabsContent value="payments">
          <Suspense fallback={<div>Carregando histórico de pagamentos...</div>}>
            <PaymentHistory studentId={student.id} />
          </Suspense>
        </TabsContent>
        <TabsContent value="classes">
          <Suspense fallback={<div>Carregando histórico de aulas...</div>}>
            <ClassHistory studentId={student.id} />
          </Suspense>
        </TabsContent>
      </Tabs>
    </div>
  );
}
