import { signupSchema } from "@/app/(auth)/cadastro/schema";

type SignupResponse = {
  success?: string;
  error?: string;
  validationErrors?: Record<string, string>;
};

export async function handleSignup(
  formData: Record<string, unknown>
): Promise<SignupResponse> {
  try {
    // Valida os dados do formulário com Zod
    const validatedFields = signupSchema.safeParse(formData);

    if (!validatedFields.success) {
      const validationErrors: Record<string, string> = {};
      validatedFields.error.errors.forEach((err) => {
        if (err.path.length) {
          validationErrors[err.path[0]] = err.message;
        }
      });

      return {
        error: "Invalid form data. Please check your inputs.",
        validationErrors,
      };
    }

    // Simulação de operação assíncrona (ex: salvar no banco de dados)
    await new Promise((resolve) => setTimeout(resolve, 500));

    return { success: "User registered successfully!" };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message || "An unexpected error occurred." };
    }
    return { error: "An unknown error occurred." };
  }
}
