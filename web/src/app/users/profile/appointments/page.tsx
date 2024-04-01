import AppointmentCard from "@/components/AppointmentCard";
import Sidebar from "@/components/Sidebar";

export default function Appointments() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full p-8">
        <h1 className="text-3xl font-bold mb-4">Meus Agendamentos</h1>

        <select name="appointments-status" id="appointments-status" className="border border-black rounded-md p-2.5 outline-none mb-4">
          <option value="all-appointments">Todos os Agendamentos</option>
          <option value="new-appointments">Agendamentos Recentes</option>
          <option value="old-appointments">Agendamentos Antigos</option>
        </select>

        <div className="flex flex-col gap-4">
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
        </div>
      </div>
    </div>
  );
}
