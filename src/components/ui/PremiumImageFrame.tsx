type PremiumImageFrameProps = {
  src: string;
  alt: string;
  objectPosition?: string;
  className?: string;
};

export function PremiumImageFrame({
  src,
  alt,
  objectPosition = "center",
  className = "",
}: PremiumImageFrameProps) {
  return (
    <div
      className={`group relative h-full w-full overflow-hidden rounded-[10px] border border-gold/50 bg-black shadow-[0_3px_12px_rgba(0,0,0,0.5),0_0_24px_rgba(212,175,55,0.15)] transition-all duration-500 hover:border-gold hover:shadow-[0_5px_24px_rgba(212,175,55,0.3)] ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        style={{ objectPosition }}
        draggable={false}
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gold/15 via-transparent to-transparent"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 rounded-[10px] shadow-[inset_0_0_24px_rgba(212,175,55,0.18)] ring-1 ring-inset ring-gold/40" />
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent shadow-[0_0_10px_rgba(212,175,55,0.5)]"
        aria-hidden
      />
    </div>
  );
}
