import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { IStudent } from "@/interfaces/student";

export default function StudentDetails({ student }: { student: IStudent }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Detalhes do Aluno e Turma</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <dt className="font-medium">Nome</dt>
            <dd>{student.nome}</dd>
          </div>
          <div>
            <dt className="font-medium">Idade</dt>
            <dd>{student.idade} anos</dd>
          </div>
          <div>
            <dt className="font-medium">Turma</dt>
            <dd>{student.turma}</dd>
          </div>
          <div>
            <dt className="font-medium">Status</dt>
            <dd
              className={
                student.status === "ativo" ? "text-green-600" : "text-red-600"
              }
            >
              {student.status === "ativo" ? "Ativo" : "Inativo"}
            </dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}
