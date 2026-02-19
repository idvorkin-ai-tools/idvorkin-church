import { useState } from "react";
import ministries from "../../data/ministries.json";
import { MinistryCard } from "./MinistryCard";
import type { Ministry } from "../../types";
import { cn } from "../../utils/cn";

const filters = ["all", "youth", "adults", "families"] as const;

export function MinistriesGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered = activeFilter === "all"
    ? ministries
    : ministries.filter((m) => m.audience === activeFilter);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f === "all" ? "all" : f)}
            className={cn(
              "px-5 py-2.5 rounded-sm text-[10px] font-display tracking-[0.2em] uppercase transition-all duration-300",
              activeFilter === f
                ? "bg-midnight-900 text-parchment-100 shadow-lg shadow-midnight-900/20"
                : "bg-parchment-50 text-midnight-500 border border-parchment-300 hover:bg-parchment-200/60 hover:text-midnight-700"
            )}
          >
            {f === "all" ? "All Ministries" : f}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
        {(filtered as Ministry[]).map((m) => (
          <MinistryCard key={m.id} {...m} />
        ))}
      </div>
    </div>
  );
}
