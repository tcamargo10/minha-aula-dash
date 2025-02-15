import type { Metadata } from "next";
import DashboardContent from "./dashboard-content";

export const metadata: Metadata = {
  title: "Painel de Controle",
  description: "Painel de controle de gestão escolar",
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="flex-1">
        <DashboardContent />
      </main>
    </div>
  );
}
