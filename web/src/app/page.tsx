"use client"

import Header from "@/components/Header";
import SalonCard from "@/components/SalonCard";
import SearchLocation from "@/components/SearchLocation";
import { api } from "@/lib/api";
import { useEffect, useState } from "react";

interface Salon {
  id: string;
  companyName: string;
  document: string;
  description: string;
  zipcode: number;
  address: string;
  district: string;
  city: string;
  state: string;
  number: number;
  latitude: string;
  longitude: string;
}

export default function Home() {
  const [salons, setSalons] = useState<Salon[]>([]);

  useEffect(() => {
    const fetchSalons = async () => {
      try {
        const response = await api.get("/salons");
        setSalons(response.data.salons);
      } catch (error) {
        console.error("Erro ao buscar salões:", error);
      }
    };

    fetchSalons();
  }, []);

  return (
    <>
      <Header />
      <SearchLocation />
      <div className="grid grid-cols-3 grid-flow-row">
        {salons.map((salon) => (
          <SalonCard key={salon.id} salon={salon} />
        ))}
      </div>
    </>
  );
}
