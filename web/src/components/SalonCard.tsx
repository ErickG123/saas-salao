import { BookmarkBorder, Star } from "@mui/icons-material";

export default function SalonCard() {
  return (
    <a href="/salons">
      <div className="grid grid-cols-3 items-center border border-black rounded-md py-4 m-2">
        <div className="mx-auto w-24 h-24 bg-gray-700 rounded-full"></div>
        <div className="col-span-2">
          <div className="flex justify-between">
            <p>Nome do Salão</p>
            <BookmarkBorder className="mr-4" />
          </div>
          <p>Rua XPTO, 124 - Vila CPT</p>
          <p><span className="font-semibold">Distância:</span> 400m</p>
          <p><span className="font-semibold">Telefone:</span> (14) 99777-8864</p>
          <div className="flex items-center">
            <Star className="mr-1" />
            4.5
            (100)
          </div>
        </div>
      </div>
    </a>
  );
}
