import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Menu } from "@mui/icons-material";

export default function MoreInfosBtn() {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center cursor-pointer">
        <Menu className="mr-2" />
        Mais Informações
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Informações sobre o Estabelecimento</DialogTitle>
          <DialogDescription>
            Informações...
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
