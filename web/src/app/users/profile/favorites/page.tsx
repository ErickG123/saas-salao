import SalonCard from "@/components/SalonCard";
import Sidebar from "@/components/Sidebar";

export default function Favorites() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full p-8">
        <h1 className="text-3xl font-bold mb-4">Favoritos</h1>

        <div className="grid grid-cols-2 grid-flow-row">
          <SalonCard />
          <SalonCard />
          <SalonCard />
        </div>
      </div>
    </div>
  );
}
