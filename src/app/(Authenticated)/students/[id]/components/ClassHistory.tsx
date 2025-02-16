import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getClassHistory } from "@/mocks";

export default async function ClassHistory({
  studentId,
}: {
  studentId: string;
}) {
  const classes = await getClassHistory(studentId);

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
            {classes.map((classItem) => (
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
