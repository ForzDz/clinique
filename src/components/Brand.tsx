import { cn } from "@/lib/utils";
import logoType from "@/assets/clinic hova.png";

type BrandVariant = "navbar" | "footer" | "default";

export default function Brand({
  variant = "default",
  className,
  href = "#top",
}: {
  variant?: BrandVariant;
  className?: string;
  href?: string;
}) {
  const sizes =
    variant === "navbar"
      ? { type: "h-10 md:h-11" }
      : variant === "footer"
        ? { type: "h-12 md:h-14" }
        : { type: "h-11" };

  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        className
      )}
      aria-label="Aller en haut de page"
    >
      <img
        src={logoType}
        alt="Clinic Hova"
        className={cn(
          "w-auto max-w-[300px] md:max-w-[360px] drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]",
          sizes.type
        )}
        loading="eager"
      />
    </a>
  );
}

