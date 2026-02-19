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
    : ministries.filter((m) => m.audience === activeFilter || m.audience === "all");

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 capitalize",
              activeFilter === f
                ? "bg-iris-500 text-white shadow-sm"
                : "bg-white text-ink-500 border border-cloud-300 hover:bg-cloud-50 hover:text-ink-700"
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
