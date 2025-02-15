import { signupSchema } from "@/app/register/schema";

export async function handleSignup(prevState: any, formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries());
  const validatedFields = signupSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return { error: "Invalid form data. Please check your inputs." };
  }

  // Here you would typically save the user data to your database
  // For this example, we'll just return a success message
  return { success: "User registered successfully!" };
}
