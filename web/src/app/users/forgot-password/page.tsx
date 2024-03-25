"use client";

import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface ForgotPasswordForm {
  email: string
}

export default function ForgotPassword() {
  const { register, handleSubmit } = useForm<ForgotPasswordForm>();
  const router = useRouter();

  async function handleForgotPassword(data: ForgotPasswordForm) {
    try {
      await api.post(
        "/users/forgot-password",
        {
          email: data.email
        }
      );

      localStorage.setItem("email", data.email);
      router.push("/users/check-email");
    } catch (error) {
      console.log("Erro ao enviar o email: ", error);
    }
  }

  return (
    <form onSubmit={handleSubmit(handleForgotPassword)} className="flex justify-center items-center min-h-screen">
      <div className="w-1/3 border shadow-md rounded-md p-6">
        <h1 className="flex justify-center items-center text-5xl font-bold">SaaS</h1>
        <p className="text-center my-4 text-sm">
          Digite seu e-mail para receber o link de redefinição de senha.
        </p>
        <div className="w-full flex flex-col gap-2">
          <input className="border border-gray-300 rounded-md p-2.5 outline-none" type="email" placeholder="E-mail" {...register("email", { required: true })} />
        </div>
        <button className="w-full p-2.5 mt-2 border rounded-md bg-slate-950 hover:bg-slate-800 text-white font-semibold">Enviar E-mail</button>
      </div>
    </form>
  );
}
