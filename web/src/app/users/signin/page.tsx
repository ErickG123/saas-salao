"use client";

import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface SignInForm {
    email: string
    password: string
}

export default function SignUp() {
    const { register, handleSubmit } = useForm<SignInForm>();
    const router = useRouter();

    async function handleAuthenticateUser(data: SignInForm) {
        try {
            const response = await api.post(
                "/users/authenticate",
                {
                    email: data.email,
                    password: data.password
                },
                {
                    headers: {
                        "Content-type": "application/json"
                    }
                }
            );

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("logged", "s");
            router.push("/");
        } catch (error) {
            console.log("Erro ao autenticar o usuário: ", error);
        }
    }

    return (
        <form onSubmit={handleSubmit(handleAuthenticateUser)} className="flex justify-center items-center min-h-screen">
            <div className="w-1/3 border shadow-md rounded-md p-6">
                <h1 className="flex justify-center items-center text-5xl font-bold">SaaS</h1>
                <p className="text-center my-4 text-sm">
                    Ao me logar, aceito os <a href="" target="_blank" className="font-bold hover:opacity-80">Termos de Uso</a> e <a href="" target="_blank" className="font-bold hover:opacity-80">Política de Privacidade</a> do SaaS e afirmo ter 15 anos ou mais.
                </p>
                <div className="w-full flex flex-col gap-2">
                    <input className="border border-gray-300 rounded-md p-2.5 outline-none" type="email" placeholder="Email" {...register("email", { required: true })} />
                    <input className="border border-gray-300 rounded-md p-2.5 outline-none" type="password" placeholder="Senha" {...register("password", { required: true })} />
                </div>
                <div className="flex justify-between my-2">
                    <div className="flex justify-center items-center">
                        <input className="mr-2" type="checkbox" name="stay_connected" id="stay_connected" />
                        <label htmlFor="stay_connected">Permancer Conectado</label>
                    </div>
                    <a href="/users/forgot-password" className="flex justify-end font-semibold hover:opacity-85">Esqueci minha senha</a>
                </div>
                <button className="w-full p-2.5 border rounded-md bg-slate-950 hover:bg-slate-800 text-white font-semibold">Entrar</button>
                <div className="flex flex-row justify-center items-center my-2">
                    <div className="h-px w-full bg-gray-300" />
                    <div className="mx-2">ou</div>
                    <div className="h-px w-full bg-gray-300" />
                </div>
                <div className="flex flex-col gap-2">
                    <a href="/users/signup" className="w-full p-2.5 border rounded-md text-center border-gray-300 hover:bg-stone-100 font-semibold">Criar Conta</a>
                    <a href="" className="w-full p-2.5 border rounded-md text-center bg-slate-950 hover:bg-slate-800 text-white font-semibold">Entrar com o Google</a>
                </div>
            </div>
        </form>
    )
}
