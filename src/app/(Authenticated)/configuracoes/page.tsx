import type { Metadata } from "next";
import { Cog, User, BellRing, Globe, Shield, CreditCard } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export const metadata: Metadata = {
  title: "Configurações",
  description: "Gerencie as configurações do sistema",
};

export default function ConfiguracoesPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Configurações</h1>
        <p className="text-muted-foreground">
          Gerencie as configurações da sua conta e preferências do sistema.
        </p>
      </div>

      <Tabs defaultValue="perfil" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="perfil" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Perfil</span>
          </TabsTrigger>
          <TabsTrigger value="notificacoes" className="flex items-center gap-2">
            <BellRing className="h-4 w-4" />
            <span>Notificações</span>
          </TabsTrigger>
          <TabsTrigger value="geral" className="flex items-center gap-2">
            <Cog className="h-4 w-4" />
            <span>Geral</span>
          </TabsTrigger>
          <TabsTrigger value="seguranca" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>Segurança</span>
          </TabsTrigger>
          <TabsTrigger value="plano" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            <span>Plano</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="perfil" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações Pessoais</CardTitle>
              <CardDescription>
                Atualize suas informações pessoais.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome</Label>
                  <Input
                    id="nome"
                    placeholder="Nome"
                    defaultValue="João Silva"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    defaultValue="joao@exemplo.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input
                    id="telefone"
                    placeholder="Telefone"
                    defaultValue="(11) 98765-4321"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cargo">Cargo</Label>
                  <Input
                    id="cargo"
                    placeholder="Cargo"
                    defaultValue="Professor"
                  />
                </div>
              </div>
              <Button>Salvar alterações</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notificacoes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Preferências de Notificação</CardTitle>
              <CardDescription>
                Escolha quais notificações você deseja receber.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-y-0">
                  <Checkbox id="emails" defaultChecked />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="emails"
                      className="text-sm font-medium leading-none"
                    >
                      Emails
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receba notificações por email.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 space-y-0">
                  <Checkbox id="updates" defaultChecked />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="updates"
                      className="text-sm font-medium leading-none"
                    >
                      Atualizações do sistema
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receba atualizações sobre novos recursos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 space-y-0">
                  <Checkbox id="alunos" defaultChecked />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="alunos"
                      className="text-sm font-medium leading-none"
                    >
                      Atividades de alunos
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receba alertas sobre atividades de alunos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 space-y-0">
                  <Checkbox id="pagamentos" defaultChecked />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="pagamentos"
                      className="text-sm font-medium leading-none"
                    >
                      Pagamentos
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receba alertas sobre pagamentos.
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <Button>Salvar preferências</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="geral" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configurações Gerais</CardTitle>
              <CardDescription>
                Defina suas preferências gerais do sistema.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Idioma</Label>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <Globe className="h-4 w-4" />
                      <span>Português (Brasil)</span>
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Fuso horário</Label>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline">América/São Paulo (GMT-3)</Button>
                  </div>
                </div>
                <Separator className="my-4" />
                <Button>Salvar configurações</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seguranca" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Segurança</CardTitle>
              <CardDescription>
                Gerencie a segurança da sua conta.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="senha-atual">Senha atual</Label>
                  <Input id="senha-atual" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nova-senha">Nova senha</Label>
                  <Input id="nova-senha" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmar-senha">Confirmar nova senha</Label>
                  <Input id="confirmar-senha" type="password" />
                </div>
                <Separator className="my-4" />
                <Button>Atualizar senha</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="plano" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Seu Plano</CardTitle>
              <CardDescription>
                Gerencie seu plano de assinatura.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h3 className="font-medium text-lg">Plano Premium</h3>
                  <p className="text-muted-foreground">
                    Próximo pagamento: 15/05/2024
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-medium">Recursos incluídos:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Cadastro ilimitado de alunos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Controle financeiro avançado</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Relatórios personalizados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Suporte prioritário</span>
                    </li>
                  </ul>
                </div>
                <Separator className="my-4" />
                <div className="flex gap-3">
                  <Button variant="outline">Alterar plano</Button>
                  <Button variant="destructive">Cancelar assinatura</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
