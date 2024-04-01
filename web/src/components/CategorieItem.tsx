export default function CategorieItem() {
  return (
    <div className="w-full flex justify-between border-b border-b-gray-400 pb-2">
      <div>
        <p className="font-semibold">Corte e Estilo Personalizado</p>
        <p>Transformação única do visual com um corte personalizado e estilização adaptada ao seu estilo.</p>
      </div>
      <div className="flex">
        <div className="mr-2">
          <p><span className="font-semibold mr-1">Valor:</span> R$ 120-150</p>
          <p><span className="font-semibold mr-1">Tempo Médio:</span> 1h</p>
        </div>
        <button className="rounded-md bg-slate-950 hover:bg-slate-800 p-2.5 text-white font-semibold">Agendar</button>
      </div>
    </div>
  );
}
