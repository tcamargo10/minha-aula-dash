import StudentTable from "./components/StudentTable";
import StudentFilters from "./components/StudentFilters";
import { getStudents } from "@/mocks";

interface StudentsPageProps {
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function StudentsPage({
  searchParams,
}: StudentsPageProps) {
  const students = await getStudents(searchParams);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Alunos</h1>
      <StudentFilters />
      <StudentTable initialStudents={students} />
    </div>
  );
}
