export default function AppointmentCard() {
  return (
    <a href="/salons" className="flex justify-between border border-black rounded-md w-1/2 p-4">
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Corte e Estilo Personalizado</p>
        <p><span className="font-semibold">Tempo Médio:</span> 1h</p>
        <p><span className="font-semibold">Valor:</span> R$ 120,00 - R$ 150,00</p>
        <p className="flex border border-black rounded-md p-2">
          <span className="font-semibold mr-1">Horário Escolhido:</span>
          16:00 - 17:00
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-24 h-24 bg-gray-700 rounded-full"></div>
        <p className="font-semibold mt-2">Walter White</p>
      </div>
    </a>
  );
}
