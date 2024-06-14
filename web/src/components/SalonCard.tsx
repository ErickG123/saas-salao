import { BookmarkBorder } from '@mui/icons-material';

interface Salon {
  id: string;
  companyName: string;
  address: string;
  number: number;
  district: string;
  city: string;
  state: string;
  zipcode: number;
  description: string;
}

interface Props {
  salon: Salon;
}

export default function SalonCard({ salon }: Props) {
  return (
    <a href={`/salons/${salon.id}`}>
      <div className="grid grid-cols-3 items-center border border-black rounded-md py-4 m-2">
        <div className="mx-auto w-24 h-24 bg-gray-700 rounded-full"></div>
        <div className="col-span-2">
          <div className="flex justify-between">
            <p>{salon.companyName}</p>
            <BookmarkBorder className="mr-4" />
          </div>
          <p>{`${salon.address}, ${salon.number} - ${salon.district}`}</p>
          <p><span className="font-semibold">Cidade:</span> {salon.city} - {salon.state}</p>
          <p><span className="font-semibold">CEP:</span> {salon.zipcode}</p>
        </div>
      </div>
    </a>
  );
}
