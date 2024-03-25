import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AccountCircle, Menu } from "@mui/icons-material";

export default function LoggedOut() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="border border-gray-300 rounded-full px-3 py-2 outline-none" type="button">
          <Menu />
          <AccountCircle />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mx-4">
        <DropdownMenuItem><a href="/users/signup">Cadastrar-se</a></DropdownMenuItem>
        <DropdownMenuItem><a href="/users/signin">Entrar</a></DropdownMenuItem>
        <DropdownMenuSeparator className="mx-auto bg-gray-300 w-11/12" />
        <DropdownMenuItem><a href="">Adicione sua empresa ao SaaS</a></DropdownMenuItem>
        <DropdownMenuItem><a href="">Central de Ajuda</a></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
