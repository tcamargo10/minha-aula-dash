import { Suspense } from "react";
import StudentTable from "./components/StudentTable";
import StudentFilters from "./components/StudentFilters";
import { getStudents } from "@/mocks";

export default async function StudentsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const students = await getStudents(searchParams);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Alunos</h1>
      <StudentFilters />
      <Suspense fallback={<div>Carregando...</div>}>
        <StudentTable initialStudents={students} />
      </Suspense>
    </div>
  );
}
