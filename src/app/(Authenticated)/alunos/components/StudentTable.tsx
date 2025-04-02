import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StudentDataTable } from "./student-data-table";
import { fetchStudents } from "@/mocks";

export type Student = {
  id: number;
  name: string;
  email: string;
  status: "em_aberto" | "pago" | "atrasado";
  amount: number;
  dueDate: string;
};

export default async function FinancialDashboard() {
  // Buscar dados da sua API ou banco de dados aqui
  const students = await fetchStudents();

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Alunos e Boletos</CardTitle>
        </CardHeader>
        <CardContent>
          <StudentDataTable data={students} />
        </CardContent>
      </Card>
    </div>
  );
}
