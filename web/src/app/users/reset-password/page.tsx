"use client";

import { api } from "@/lib/api";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

interface ResetPasswordForm {
  password: string;
  confirm_password: string;
}

export default function ResetPassword() {
  const { register, handleSubmit } = useForm<ResetPasswordForm>();
  const router = useRouter();
  const searchParams = useSearchParams();

  async function handleResetPassword(data: ResetPasswordForm) {
    if (data.password !== data.confirm_password) {
      console.log("As senhas devem ser iguais");
      return;
    }

    const resetToken = searchParams.get("resetToken");
    const email = localStorage.getItem("email");

    await api.post(
      `users/reset-password?resetToken=${resetToken}`,
      {
        email,
        password: data.password
      }
    );

    localStorage.removeItem("email");
    router.push("/users/signin");
  }

  return (
    <form onSubmit={handleSubmit(handleResetPassword)} className="flex justify-center items-center min-h-screen">
      <div className="w-1/3 border shadow-md rounded-md p-6">
        <h1 className="flex justify-center items-center text-5xl font-bold">SaaS</h1>
        <p className="text-center my-4 text-sm">
          Por favor, forneça sua nova senha para que possamos redefini-la.
        </p>
        <div className="w-full flex flex-col gap-2">
          <input className="border border-gray-300 rounded-md p-2.5 outline-none" type="password" placeholder="Senha" {...register("password", { required: true })} />
          <input className="border border-gray-300 rounded-md p-2.5 outline-none" type="password" placeholder="Confirmar Senha" {...register("confirm_password", { required: true })} />
        </div>
        <button className="w-full p-2.5 mt-2 border rounded-md bg-slate-950 hover:bg-slate-800 text-white font-semibold">Redefinir Senha</button>
      </div>
    </form>
  );
}
