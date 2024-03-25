"use client";

import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface SignUpForm {
    name: string
    email: string
    password: string
    confirm_password: string
    phone: number
}

export default function SignUp() {
    const { register, handleSubmit } = useForm<SignUpForm>();
    const router = useRouter();

    async function handleCreateUser(data: SignUpForm) {
        try {
            await api.post(
                "/users",
                {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    phone: data.phone,
                    otpCode: ""
                },
                {
                    headers: {
                        "Content-type": "application/json"
                    }
                }
            );
    
            localStorage.setItem("email", data.email);
            router.push("/users/verify-otp");
        } catch (error) {
            console.error("Erro ao criar usuário:", error);
        }
    }

    return (
        <form onSubmit={handleSubmit(handleCreateUser)} className="flex justify-center items-center min-h-screen">
            <div className="w-1/3 border shadow-md rounded-md p-6">
                <h1 className="flex justify-center items-center text-5xl font-bold">SaaS</h1>
                <p className="text-center my-4 text-sm">
                    Ao me cadastrar, aceito os <a href="" target="_blank" className="font-bold hover:opacity-80">Termos de Uso</a> e <a href="" target="_blank" className="font-bold hover:opacity-80">Política de Privacidade</a> do SaaS e afirmo ter 15 anos ou mais.
                </p>
                <div className="w-full flex flex-col gap-2 mb-2">
                    <input className="border border-gray-300 rounded-md p-2.5 outline-none" type="text" placeholder="Nome Completo" {...register("name")} />
                    <input className="border border-gray-300 rounded-md p-2.5 outline-none" type="email" placeholder="Email" {...register("email")} />
                    <input className="border border-gray-300 rounded-md p-2.5 outline-none" type="tel" placeholder="Número do Celular" {...register("phone")} />
                    <input className="border border-gray-300 rounded-md p-2.5 outline-none" type="password" placeholder="Senha" {...register("password")} />
                    <input className="border border-gray-300 rounded-md p-2.5 outline-none" type="password" placeholder="Confirmar Senha" {...register("confirm_password")} />
                </div>
                <button className="w-full p-2.5 border rounded-md bg-slate-950 hover:bg-slate-800 text-white font-semibold">Criar Conta</button>
                <div className="flex flex-row justify-center items-center my-2">
                    <div className="h-px w-full bg-gray-300" />
                    <div className="mx-2">ou</div>
                    <div className="h-px w-full bg-gray-300" />
                </div>
                <div className="flex flex-col gap-2">
                    <a href="/users/signin" className="w-full p-2.5 border rounded-md text-center border-gray-300 hover:bg-stone-100 font-semibold">Já tenho uma conta</a>
                    <a href="" className="w-full p-2.5 border rounded-md text-center bg-slate-950 hover:bg-slate-800 text-white font-semibold">Entrar com o Google</a>
                </div>
            </div>
        </form>
    )
}
