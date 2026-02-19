import clergy from "../../data/clergy.json";
import { ClergyCard } from "./ClergyCard";
import type { ClergyMember } from "../../types";

export function ClergyGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {(clergy as ClergyMember[]).map((member) => (
        <ClergyCard key={member.id} {...member} />
      ))}
    </div>
  );
}
