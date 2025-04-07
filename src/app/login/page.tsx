"use client";
import React from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "./actions";

const LoginForm =() => {
  const [state, loginAction] = useActionState(login, undefined);

  return (
    <form
      action={loginAction}
      className="flex flex-col gap-4 bg-gray-800 text-white p-8 w-full h-screen justify-center items-center"
    >
      <div className="flex flex-col gap-2 w-full max-w-[400px]">
        <label htmlFor="email" className="text-sm"> Email </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 w-full"
        />
        {state?.errors?.email && (
          <p className="text-red-500 text-sm">{state.errors.email}</p>
        )}
      </div>

      <div className="flex flex-col gap-2 w-full max-w-[400px]">
        <label htmlFor="password" className="text-sm"> Password </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 w-full"
        />
        {state?.errors?.password && (
          <p className="text-red-500 text-sm">{state.errors.password}</p>
        )}
      </div>

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md hover:bg-gray-600 disabled:opacity-50 mt-4 w-full max-w-[400px]"
    >
      {pending ? "Submitting..." : "Login"}
    </button>
  );
}

export default LoginForm
