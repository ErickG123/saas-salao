"use client";

import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface VerifyOtpForm {
  otpCode: string
}

export default function VerifyOtp() {
  const { register, handleSubmit } = useForm<VerifyOtpForm>();
  const router = useRouter();

  async function handleVerifyOtp(data: VerifyOtpForm) {
    const email = localStorage.getItem("email");

    try {
      await api.post(
        "/users/verify-otp",
        {
          email,
          otpCode: data.otpCode
        }
      );

      router.push("/users/signin");
    } catch (error) {
      console.log("Erro ao ativar a conta: ", error);
    }
  }

  return (
    <form onSubmit={handleSubmit(handleVerifyOtp)} className="flex justify-center items-center min-h-screen">
      <div className="w-1/3 border shadow-md rounded-md p-6">
        <h1 className="flex justify-center items-center text-5xl font-bold">SaaS</h1>
        <p className="text-center my-4 text-sm">
          Digite seu e-mail para receber o link de redefinição de senha.
        </p>
        <div className="w-full flex flex-col gap-2">
          <input className="border border-gray-300 rounded-md p-2.5 outline-none" type="text" placeholder="Código OTP" {...register("otpCode", { required: true })} />
        </div>
        <button className="w-full p-2.5 mt-2 border rounded-md bg-slate-950 hover:bg-slate-800 text-white font-semibold">Enviar E-mail</button>
      </div>
    </form>
  );
}
