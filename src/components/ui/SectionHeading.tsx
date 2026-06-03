import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  children,
  as: Tag = "h2",
  className = "",
  align = "center",
}: SectionHeadingProps) {
  return (
    <Tag
      className={[
        align === "center" ? "text-center" : "text-left",
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}
