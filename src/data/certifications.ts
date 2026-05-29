export type CertificationIcon = "award" | "dumbbell" | "target";

export interface Certification {
  id: string;
  icon: CertificationIcon;
  title: string;
  description: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cref",
    icon: "award",
    title: "Educação Física",
    description: "CREF Credenciado - Conselho Regional de Educação Física",
  },
  {
    id: "performance",
    icon: "dumbbell",
    title: "Alta Performance Esportiva",
    description: "Experiente em treinos para o público de alta performance esportiva",
  },
  {
    id: "pcd",
    icon: "target",
    title: "Atendimento PCD",
    description: "Experiente em atendimento ao público PCD",
  },
  {
    id: "rehab",
    icon: "award",
    title: "Reabilitação",
    description: "Experiente em treinos para reabilitação",
  },
];
