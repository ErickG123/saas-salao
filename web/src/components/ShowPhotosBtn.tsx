import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Image } from "@mui/icons-material";

export default function ShowPhotosBtn() {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center cursor-pointer">
        <Image className="mr-2" />
        Fotos
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Fotos</DialogTitle>
          <DialogDescription>
            Listagem das Fotos
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
