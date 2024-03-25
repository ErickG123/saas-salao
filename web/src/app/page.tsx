import Header from "@/components/Header";
import SalonCard from "@/components/SalonCard";
import SearchLocation from "@/components/SearchLocation";

export default function Home() {
  return (
    <>
      <Header />
      <SearchLocation />
      <div className="grid grid-cols-3 grid-flow-row">
        <SalonCard />
        <SalonCard />
        <SalonCard />
        <SalonCard />
        <SalonCard />
        <SalonCard />
        <SalonCard />
        <SalonCard />
        <SalonCard />
        <SalonCard />
        <SalonCard />
        <SalonCard />
        <SalonCard />
        <SalonCard />
        <SalonCard />
      </div>
    </>
  );
}
