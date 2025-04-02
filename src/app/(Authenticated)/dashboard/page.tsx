import type { Metadata } from "next";
import DashboardContent from "./dashboard-content";
import { AppSidebar } from "@/components/app-sidebar";

export const metadata: Metadata = {
  title: "Painel de Controle",
  description: "Painel de controle de gestão escolar",
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="fixed top-0 left-0 h-screen w-64 bg-background border-r">
        <AppSidebar />
      </div>
      <div>
        <DashboardContent />
      </div>
    </div>
  );
}
