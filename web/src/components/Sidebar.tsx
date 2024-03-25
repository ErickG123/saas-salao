"use client";

import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("logged");
    localStorage.removeItem("email");

    router.push("/");
  }

  return (
    <div className="flex flex-col w-1/5 h-screen border-r border-gray-400">
      <a href="/users/profile" className="font-semibold p-4 pb-0 cursor-pointer">Meu Perfil</a>
      <a href="/users/profile/appointments" className="font-semibold p-4 pb-0 cursor-pointer">Meus Agendamentos</a>
      <a href="/" className="font-semibold p-4 pb-0 cursor-pointer">Buscar Estabelecimentos</a>
      <a href="/users/profile/favorites" className="font-semibold p-4 pb-0 cursor-pointer">Favoritos</a>
      <a href="/about" target="_blank" className="font-semibold p-4 pb-0">Sobre o SaaS</a>
      <a href="/terms" target="_blank" className="font-semibold p-4 pb-0">Termos e Privacidade</a>
      <p onClick={handleLogout} className="font-semibold p-4 pb-0 cursor-pointer">Logout</p>
    </div>
  );
}
