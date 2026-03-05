export default function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block px-2.5 py-0.5 text-xs rounded-full bg-[var(--color-beige-dark)] text-[var(--color-muted)] border border-[var(--color-muted)]/15">
      {label}
    </span>
  );
}
