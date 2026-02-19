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
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f === "all" ? "all" : f)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize",
              activeFilter === f
                ? "bg-navy-800 text-white"
                : "bg-white text-navy-600 border border-navy-200 hover:bg-navy-50"
            )}
          >
            {f === "all" ? "All Ministries" : f}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(filtered as Ministry[]).map((m) => (
          <MinistryCard key={m.id} {...m} />
        ))}
      </div>
    </div>
  );
}
