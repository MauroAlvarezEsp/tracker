"use server";
import { createSession, deleteSession } from "./session";
import { redirect } from "next/navigation";
import { User } from "@/types/User";
import { testUsers } from "../api/v1/mocks";
import { loginSchema } from "@/utils/utils";


export async function login(prevState: any, formData: FormData) {
  const result = loginSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) 
    return { errors: result.error.flatten().fieldErrors };

  const { email, password } = result.data;
  const user: User | undefined = testUsers.find(usr => usr.email == email)


  if (!user || user.password !== password) {
    return {
      errors: { email: ["Invalid email or password"] },
    };
  }

  await createSession(user);
  redirect("/monitor");
}

export async function signout() {
  await deleteSession();
  redirect("/login");
}