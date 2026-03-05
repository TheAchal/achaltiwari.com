export default function Divider({ label }: { label?: string }) {
  if (label) {
    return (
      <div className="flex items-center gap-4 my-16">
        <div className="flex-1 h-px bg-[var(--color-beige-dark)]" />
        <span className="text-xs text-[var(--color-muted)] uppercase tracking-widest">
          {label}
        </span>
        <div className="flex-1 h-px bg-[var(--color-beige-dark)]" />
      </div>
    );
  }
  return <hr className="my-16 border-[var(--color-beige-dark)]" />;
}
