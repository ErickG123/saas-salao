"use client";

import { api } from "@/lib/api"
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

interface CreateSalonForm {
  "companyName": string,
  "document": string,
  "description": string,
  "zipcode": number,
  "address": string,
  "district": string,
  "city": string,
  "state": string,
  "number": number,
  "latitude": number,
  "longitude": number,
  "userIds": string
}

interface DecodedToken {
  sub: string;
}

export default function CreateSalon() {
  const { register, handleSubmit } = useForm<CreateSalonForm>();
  const router = useRouter();

  let token: string;
  let userId;

  if (typeof window !== "undefined") {
    token = localStorage.getItem("token") || "";

    if (token !== null && typeof token === "string") {
      const decodedToken = jwtDecode(token) as DecodedToken;
      userId = decodedToken.sub;
    }
  }

  async function handleCreateSalon(data: CreateSalonForm) {
    try {
      await api.post(
        "/salons",
        {
          companyName: data.companyName,
          document: data.document,
          description: data.description,
          zipcode: Number(data.zipcode),
          address: data.address,
          district: data.district,
          city: data.city,
          state: data.state,
          number: Number(data.number),
          latitude: data.latitude,
          longitude: data.longitude,
          userIds: [data.userIds]
        },
        {
          headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        }
      );

      router.push("/");
    } catch (error) {
      console.error("Erro ao criar o salão:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit(handleCreateSalon)} className="flex justify-center items-center min-h-screen">
      <div className="w-1/3 border shadow-md rounded-md p-6">
        <h1 className="flex justify-center items-center text-5xl font-bold">SaaS</h1>
        <p className="text-center my-4 text-sm">
          Ao me cadastrar, aceito os <a href="" target="_blank" className="font-bold hover:opacity-80">Termos de Uso</a> e <a href="" target="_blank" className="font-bold hover:opacity-80">Política de Privacidade</a> do SaaS e afirmo ter 15 anos ou mais.
        </p>
        <div className="w-full flex flex-col gap-2 mb-2">
          <input className="border border-gray-300 rounded-md p-2.5 outline-none" type="text" placeholder="Nome do Salão" {...register("companyName")} />
          <input className="border border-gray-300 rounded-md p-2.5 outline-none" type="text" placeholder="Documento" {...register("document")} />
          <input className="border border-gray-300 rounded-md p-2.5 outline-none" type="text" placeholder="Descrição" {...register("description")} />
          <input className="border border-gray-300 rounded-md p-2.5 outline-none" type="number" placeholder="CEP" {...register("zipcode")} />
          <input className="border border-gray-300 rounded-md p-2.5 outline-none" type="text" placeholder="Endereço" {...register("address")} />
          <input className="border border-gray-300 rounded-md p-2.5 outline-none" type="text" placeholder="Bairro" {...register("district")} />
          <input className="border border-gray-300 rounded-md p-2.5 outline-none" type="text" placeholder="Cidade" {...register("city")} />
          <input className="border border-gray-300 rounded-md p-2.5 outline-none" type="text" placeholder="UF" {...register("state")} />
          <input className="border border-gray-300 rounded-md p-2.5 outline-none" type="text" placeholder="Número" {...register("number")} />
          <input className="hidden" type="number" value={11.0000} {...register("latitude")} />
          <input className="hidden" type="number" value={12.0000} {...register("longitude")} />
          <input className="hidden" type="text" value={userId} {...register("userIds")} />

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
