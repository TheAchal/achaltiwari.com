type Variant = "product" | "technical" | "tool" | "soft";

function getTagStyle(variant: Variant): string {
  switch (variant) {
    case "product":
      return "bg-[#e09145]/10 text-[#e09145] border-[#e09145]/20";
    case "technical":
      return "bg-[#818cf8]/10 text-[#818cf8] border-[#818cf8]/20";
    case "tool":
      return "bg-[#8a8a9a]/10 text-[#8a8a9a] border-[#8a8a9a]/20";
    case "soft":
      return "bg-[#4ade80]/10 text-[#4ade80] border-[#4ade80]/20";
  }
}

export default function SkillTag({
  label,
  variant,
}: {
  label: string;
  variant: Variant;
}) {
  return (
    <span
      className={`inline-block px-3 py-1 text-sm rounded-full border ${getTagStyle(variant)}`}
    >
      {label}
    </span>
  );
}
