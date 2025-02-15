import { z } from "zod";

export const signupSchema = z
  .object({
    fullName: z.string().min(4, "Nome inválido"),
    email: z.string().email("Endereço de e-mail inválido"),
    password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
    confirmPassword: z.string(),
    phone: z.string().regex(/^\d{10,11}$/, "Número de telefone inválido"),
    birthDate: z.string().refine((date) => {
      const birthDate = new Date(date);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      return age >= 18;
    }, "Idade minima 18 anos"),
    documentType: z.enum(["cpf", "cnpj"]),
    documentNumber: z.string().refine((value) => {
      // Simple validation for CPF and CNPJ
      return (
        (value.length === 11 || value.length === 14) && /^\d+$/.test(value)
      );
    }, "Número de documento inválido"),
    cep: z.string().regex(/^\d{8}$/, "CEP inválido"),
    street: z.string().min(1, "Campo obrigatório"),
    number: z.string().min(1, "Campo obrigatório"),
    complement: z.string().optional(),
    neighborhood: z.string().min(1, "Campo obrigatório"),
    city: z.string().min(1, "Campo obrigatório"),
    state: z.string().min(1, "Campo obrigatório"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type SignupFormData = z.infer<typeof signupSchema>;
