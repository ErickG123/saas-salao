"use client"

import { useEffect, useState } from 'react';
import Categorie from "@/components/Categorie";
import MoreInfosBtn from "@/components/MoreInfosBtn";
import ShowPhotosBtn from "@/components/ShowPhotosBtn";
import { Search, Star } from "@mui/icons-material";
import { api } from '@/lib/api';

interface SalonDetails {
  companyName: string;
  description: string;
  address: string;
  number: number;
  district: string;
  city: string;
  state: string;
  phoneNumber: string;
  rating: number;
  reviews: number;
}

interface Props {
  params: {
    id: string
  }
}

export default function Salons({ params }: Props) {
  const id = params.id;

  const [salonDetails, setSalonDetails] = useState<SalonDetails | null>(null);

  useEffect(() => {
    const fetchSalonDetails = async () => {
      try {
        const response = await api.get(`/salons/${id}`);
        setSalonDetails(response.data);
      } catch (error) {
        console.error('Erro ao buscar os detalhes do salão:', error);
      }
    };

    if (id) {
      fetchSalonDetails();
    }
  }, [id]);

  if (!salonDetails) return <div>Carregando...</div>;

  return (
    <div className="h-screen p-4">
      <div className="flex border border-black rounded-md">
        <div className="w-1/2 bg-gray-700 rounded-l-md"></div>
        <div className="flex flex-col justify-between p-4">
          <div className="mb-10">
            <p className="text-xl font-semibold">{salonDetails.companyName}</p>
            <p>{salonDetails.description}</p>
          </div>

          <div className="flex flex-col gap-2">
            <p><span className="font-semibold mr-1">Endereço:</span> {salonDetails.address}, {salonDetails.number}, {salonDetails.district}, {salonDetails.city} - {salonDetails.state}</p>
            <p><span className="font-semibold mr-1">Telefone:</span> (14) 3641-0000</p>
            <div className="flex items-center">
              <Star />
              <a href="#" className="font-semibold">4.5 - 400 Avaliações</a>
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
            <input className="w-full outline-none" type="text" name="searchLocation" placeholder="Digite o nome do serviço que você deseja" />
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
