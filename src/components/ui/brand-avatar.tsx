import Image from "next/image";

interface BrandAvatarProps {
  size?: "sm" | "md" | "lg";
  alt?: string;
  className?: string;
}

const sizeClasses = {
  sm: "h-7 w-7",
  md: "h-9 w-9",
  lg: "h-14 w-14",
} as const;

export function BrandAvatar({
  size = "md",
  alt = "Avatar ClickVendas",
  className = "",
}: BrandAvatarProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-full border border-pink-300/40 bg-[#141418] shadow-[0_0_12px_rgba(244,175,196,0.25)] ${sizeClasses[size]} ${className}`}
    >
      <Image
        src="/avatar-clickvendas.png"
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 28px, 56px"
      />
    </div>
  );
}
