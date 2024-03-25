import { Star } from "@mui/icons-material";

export default function SalonCard() {
  return (
    <a href="/salons">
      <div className="flex items-center border border-black rounded-md p-4 m-2">
        <div className="w-24 h-24 bg-gray-700 rounded-full mr-4"></div>
        <div>
          <p>Nome do Salão</p>
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
