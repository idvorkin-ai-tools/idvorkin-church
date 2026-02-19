import type { LucideIcon } from "lucide-react";
import { cn } from "../../utils/cn";

interface IconLabelProps {
  icon: LucideIcon;
  label: string;
  className?: string;
}

export function IconLabel({ icon: Icon, label, className }: IconLabelProps) {
  return (
    <div className={cn("flex items-center gap-2 text-navy-700", className)}>
      <Icon className="w-5 h-5 text-gold-500 shrink-0" />
      <span>{label}</span>
    </div>
  );
}
