interface BentoItem {
  content: React.ReactNode;
  span?: "1" | "2";
  className?: string;
}

export default function BentoGrid({ items }: { items: BentoItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
      {items.map((item, i) => (
        <div
          key={i}
          className={`bg-[var(--color-card)] rounded-xl border border-[var(--color-beige-dark)] overflow-hidden ${
            item.span === "2" ? "sm:col-span-2" : ""
          } ${item.className ?? ""}`}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
