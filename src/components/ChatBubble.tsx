interface ChatBubbleProps {
  speaker: "achal" | "claude";
  children: React.ReactNode;
}

export default function ChatBubble({ speaker, children }: ChatBubbleProps) {
  const isAchal = speaker === "achal";

  return (
    <div className={`flex ${isAchal ? "justify-end" : "justify-start"} my-4`}>
      <div className="max-w-[85%]">
        <span
          className={`text-xs font-medium mb-1 block ${
            isAchal ? "text-right text-[var(--color-achal)]" : "text-left text-[var(--color-claude)]"
          }`}
        >
          {isAchal ? "Achal" : "Claude"}
        </span>
        <div
          className={`px-5 py-3.5 rounded-2xl text-sm leading-relaxed ${
            isAchal
              ? "bg-[var(--color-achal)] text-[#0a0a0f] font-medium rounded-br-md"
              : "bg-[var(--color-claude-light)] text-[var(--color-ink)] rounded-bl-md border border-[var(--color-claude)]/25"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
