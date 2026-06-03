import { ChevronLeft, ChevronRight } from "lucide-react";

const baseClass =
  "absolute top-1/2 z-20 flex h-8 w-8 md:h-10 md:w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-black/60 text-gold shadow-md backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-gold/20 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]";

type CarouselNavButtonProps = {
  direction: "prev" | "next";
  onClick: () => void;
};

export function CarouselNavButton({ direction, onClick }: CarouselNavButtonProps) {
  const isPrev = direction === "prev";
  const Icon = isPrev ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClass} ${isPrev ? "left-1 md:left-2" : "right-1 md:right-2"}`}
      aria-label={isPrev ? "Imagem anterior" : "Próxima imagem"}
    >
      <Icon className="h-4 w-4 md:h-5 md:w-5" />
    </button>
  );
}
