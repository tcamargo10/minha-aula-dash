"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Calendar,
  Users,
  Home,
  Settings,
  LogOut,
  BookOpen,
  GraduationCap,
  DollarSign,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "./ui/badge";

const menuItems = [
  {
    title: "Início",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Alunos",
    href: "/alunos",
    icon: Users,
  },
  {
    title: "Turmas",
    href: "/turmas",
    icon: GraduationCap,
  },
  {
    title: "Financeiro",
    href: "/financeiro",
    icon: DollarSign,
  },
  {
    title: "Calendário",
    href: "/calendario",
    icon: Calendar,
  },
  {
    title: "Configurações",
    href: "/configuracoes",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-background">
      <div className="flex flex-col gap-2 border-b p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <BookOpen className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold">Minha Aula</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Plano Premium</span>
          <Badge variant="secondary" className="text-xs">
            Ativo
          </Badge>
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-2 p-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent",
                pathname === item.href ? "bg-accent" : "transparent"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Link>
          ))}
        </div>
      </ScrollArea>
      <div className="flex items-center gap-2 border-t p-4">
        <ThemeToggle />
        <Button variant="ghost" size="icon" className="ml-auto">
          <LogOut className="h-4 w-4" />
          <span className="sr-only">Sair</span>
        </Button>
      </div>
    </div>
  );
}
