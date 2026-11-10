import {
  Activity,
  AlignCenter,
  Bolt,
  CircleDotDashed,
  Crown,
  HeartPulse,
  Layers,
  Layers3,
  Moon,
  Route,
  ShieldPlus,
  Siren,
  Smile,
  SmilePlus,
  Sparkles,
  Sun,
  Users,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";

import type { Service } from "@/lib/services";

const icons: Record<Service["icon"], LucideIcon> = {
  sparkles: Sparkles,
  implant: Bolt,
  laser: Zap,
  reconstruction: Layers3,
  airway: Wind,
  gumline: Smile,
  orthodontics: AlignCenter,
  whitening: Sun,
  crown: Crown,
  veneer: Layers,
  denture: SmilePlus,
  smile: Smile,
  family: Users,
  gum: HeartPulse,
  emergency: Siren,
  root: Route,
  sedation: Moon,
  restorative: ShieldPlus,
  tmj: Activity,
  wisdom: CircleDotDashed,
};

export function ServiceIcon({
  icon,
  className,
}: {
  icon: Service["icon"];
  className?: string;
}) {
  const Icon = icons[icon];
  return <Icon className={className} strokeWidth={1.4} aria-hidden="true" />;
}
