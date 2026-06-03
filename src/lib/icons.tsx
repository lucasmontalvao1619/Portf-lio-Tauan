import {
  Award,
  Dumbbell,
  Instagram,
  Mail,
  MessageCircle,
  Target,
  Video,
  type LucideIcon,
} from "lucide-react";
import type { CertificationIcon } from "@/data/certifications";
import type { SocialIcon } from "@/config/site";

export const CERTIFICATION_ICONS: Record<CertificationIcon, LucideIcon> = {
  award: Award,
  dumbbell: Dumbbell,
  target: Target,
};

export const SOCIAL_ICONS: Record<SocialIcon, LucideIcon> = {
  instagram: Instagram,
  whatsapp: MessageCircle,
  tiktok: Video,
  mail: Mail,
};
