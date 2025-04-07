"use server";
import { createSession, deleteSession } from "./session";
import { redirect } from "next/navigation";
import { User } from "@/types/User";
import { testUsers } from "../api/v1/mocks";
import { loginSchema } from "@/utils/utils";


export async function login(prevState: any, formData: FormData) {
  redirect("/monitor");
}

export async function signout() {
  await deleteSession();
  redirect("/login");
}