import { FilterAlt, LocationOn, Search } from "@mui/icons-material";

export default function SearchLocation() {
  return (
    <div className="flex justify-center my-6">
      <div className="flex justify-between items-center border border-gray-400 p-2.5 rounded-full w-1/3">
        <div>
          <LocationOn className="mr-2" />
          <input className="outline-none" type="text" name="searchLocation" placeholder="Informe o seu endereço atual" />
        </div>
        <div>
          <button><FilterAlt className="mr-2" /></button>
          <button><Search /></button>
        </div>
      </div>
    </div>
  );
}
