"use client"

import Sidebar from "@/components/Sidebar";

import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import { api } from '@/lib/api';
import { alertSuccess } from "@/lib/alerts";

interface UpdateProfileForm {
  name: string;
  email: string;
  phone: number;
}

interface DecodedToken {
  sub: string;
}

export default function Profile() {
  const { register, handleSubmit, setValue } = useForm<UpdateProfileForm>();

  useEffect(() => {
    handleGetProfileData();
  }, []);

  async function handleGetProfileData() {
    let id;
    let user;
    let token;

    if (typeof window !== "undefined") {
      token = localStorage.getItem("token") || false;

      if (token !== null && typeof token === "string") {
        const decodedToken = jwtDecode(token) as DecodedToken;
        id = decodedToken.sub;
      }
    }

    try {
      user = await api.get(
        `/users/${id}`,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
    }

    if (user) {
      setValue("name", user.data.name);
      setValue("email", user.data.email);
      setValue("phone", user.data.phone);
    }
  }

  async function handleUpdateProfile(data: UpdateProfileForm) {
    let id;
    let token;

    if (typeof window !== "undefined") {
      token = localStorage.getItem("token") || false;

      if (token !== null && typeof token === "string") {
        const decodedToken = jwtDecode(token) as DecodedToken;
        id = decodedToken.sub;
      }
    }

    try {
      await api.put(
        `/users/${id}`,
        {
          name: data.name,
          email: data.email,
          phone: data.phone
        },
        {
          headers: {
            "Content-type": "application/json"
          }
        }
      )
    } catch (error) {
      console.error("Erro ao atualizar o usuário:", error);
    }
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full p-8">
        <h1 className="text-3xl font-bold mb-4">Meus Dados</h1>

        <form onSubmit={handleSubmit(handleUpdateProfile)} className="flex flex-col gap-2 w-1/2">
          <input className="border border-gray-300 rounded-md p-2.5 outline-none" type="text" placeholder="Nome Completo" {...register("name")} />
          <input className="border border-gray-300 rounded-md p-2.5 outline-none" type="email" disabled placeholder="E-mail" {...register("email")} />
          <input className="border border-gray-300 rounded-md p-2.5 outline-none" type="tel" placeholder="Número do Celular" {...register("phone")} />
          <a className="flex justify-end font-semibold hover:opacity-85" href="/users/forgot-password">Esqueci minha Senha</a>
          <button onClick={() => alertSuccess("Usuário atualizado com sucesso.")} className="w-full p-2.5 border rounded-md bg-slate-950 hover:bg-slate-800 text-white font-semibold">Atualizar Dados</button>
        </form>
      </div>
    </div>
  );
}
