import sacraments from "../../data/sacraments.json";
import { SacramentCard } from "./SacramentCard";
import type { Sacrament } from "../../types";

export function SacramentsList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {(sacraments as Sacrament[]).map((s) => (
        <SacramentCard key={s.id} {...s} />
      ))}
    </div>
  );
}
