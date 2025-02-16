import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// This would typically come from an API call
const mockClasses = [
  { id: 1, date: "2023-03-01", subject: "Matemática", attendance: "Presente" },
  { id: 2, date: "2023-03-03", subject: "Português", attendance: "Ausente" },
  { id: 3, date: "2023-03-05", subject: "História", attendance: "Presente" },
];

export default function ClassHistory({ studentId }: { studentId: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Histórico de Aulas</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Data</TableHead>
              <TableHead>Disciplina</TableHead>
              <TableHead>Presença</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockClasses.map((classItem) => (
              <TableRow key={classItem.id}>
                <TableCell>{classItem.date}</TableCell>
                <TableCell>{classItem.subject}</TableCell>
                <TableCell>{classItem.attendance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
