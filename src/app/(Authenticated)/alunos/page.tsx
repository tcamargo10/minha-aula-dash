import { Suspense } from "react";

import { CardSkeleton } from "./components/skeletons";
import { fetchStudents } from "@/mocks";
import { Card, CardContent } from "@/components/ui/card";
import { StudentDataTable } from "./components/student-data-table";
import { StudentRegisterModal } from "./components/student-register-modal";

export default async function AlunosPage() {
  const students = await fetchStudents();

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Alunos</h1>
        <StudentRegisterModal />
      </div>
      <Suspense fallback={<CardSkeleton />}>
        <div className="space-y-8">
          <Card>
            <CardContent>
              <StudentDataTable data={students} />
            </CardContent>
          </Card>
        </div>
      </Suspense>
    </div>
  );
}
