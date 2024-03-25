"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AccountCircle, Menu } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function Logged() {
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("logged");
    localStorage.removeItem("email");

    router.refresh();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="border border-gray-300 rounded-full px-3 py-2 outline-none" type="button">
          <Menu />
          <AccountCircle />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mx-4">
        <DropdownMenuItem><a href="/users/profile">Meu Perfil</a></DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">Sair</DropdownMenuItem>
        <DropdownMenuSeparator className="mx-auto bg-gray-300 w-11/12" />
        <DropdownMenuItem><a href="">Adicione sua empresa ao SaaS</a></DropdownMenuItem>
        <DropdownMenuItem><a href="">Central de Ajuda</a></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
