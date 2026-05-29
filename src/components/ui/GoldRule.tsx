type GoldRuleProps = {
  className?: string;
  size?: "sm" | "md";
};

const sizes = {
  sm: "w-14 h-0.5 shadow-[0_0_12px_rgba(212,175,55,0.4)]",
  md: "w-24 h-1",
};

export function GoldRule({ className = "", size = "md" }: GoldRuleProps) {
  return <div className={`bg-gold mx-auto ${sizes[size]} ${className}`} />;
}
