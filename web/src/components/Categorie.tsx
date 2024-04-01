import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import CategorieItem from "./CategorieItem";

export default function Categorie() {
  return (
    <Collapsible>
      <CollapsibleTrigger className="font-bold">
        Serviços mais Realizados
      </CollapsibleTrigger>
      <CollapsibleContent className="flex flex-col justify-between gap-3 py-2">
        <CategorieItem />
        <CategorieItem />
        <CategorieItem />
        <CategorieItem />
      </CollapsibleContent>
    </Collapsible>
  );
}
