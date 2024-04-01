import Categorie from "@/components/Categorie";
import MoreInfosBtn from "@/components/MoreInfosBtn";
import ShowPhotosBtn from "@/components/ShowPhotosBtn";
import { Search, Star } from "@mui/icons-material";

export default function Salons() {
  return (
    <div className="h-screen p-4">
      <div className="flex border border-black rounded-md">
        <div className="w-1/2 bg-gray-700 rounded-l-md"></div>
        <div className="flex flex-col justify-between p-4">
          <div className="mb-10">
            <p className="text-xl font-semibold">Radiância Glamorosa</p>
            <p>
              Descubra uma jornada única para a verdadeira beleza em nosso ambiente acolhedor e  moderno. Nossos estilistas especializados
              oferecem tratamentos capilares luxuosos e  serviços exclusivos, enquanto priorizamos a sustentabilidade. Junte-se a nós no Radiância
              Glamorosa e experimente uma transformação que vai além da estética.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p><span className="font-semibold mr-1">Endereço:</span> Rua XPTO, 123, Bairro CPT, Barra Bonita - SP</p>
            <p><span className="font-semibold mr-1">Telefone:</span> (14) 99777-8864</p>
            <div className="flex items-center">
              <Star />
              <a href="#" className="font-semibold">4.5 - Ótimo (100)</a>
            </div>
            <div className="flex gap-2">
              <ShowPhotosBtn />
              <MoreInfosBtn />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between my-4">
        <div className="flex justify-between items-center border border-gray-400 p-2.5 rounded-full w-2/3 mr-4">
          <div className="w-full flex">
            <Search className="mr-2" />
            <input className="w-full outline-none" type="text" name="searchLocation" placeholder="Informe o seu endereço atual" />
          </div>
        </div>
        <div className="w-1/3 flex items-center justify-center text-white font-semibold bg-slate-950 rounded-md">
          Nenhum Agendamento Selecionado
        </div>
      </div>

      <div>
        <Categorie />
        <Categorie />
        <Categorie />
      </div>
    </div>
  );
}
