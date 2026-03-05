import Link from "next/link";
import ChatBubble from "@/components/ChatBubble";
import MetricCard from "@/components/MetricCard";
import Divider from "@/components/Divider";
import PullQuote from "@/components/PullQuote";
import { getAllContent } from "@/lib/mdx";
import { CaseStudyMeta, BlogPostMeta } from "@/lib/types";
import ContentCard from "@/components/ContentCard";

export default function Home() {
  const caseStudies = getAllContent<CaseStudyMeta>("case-studies");
  const blogPosts = getAllContent<BlogPostMeta>("blog");

  return (
    <div>
      {/* Hero — Claude's opening */}
      <section className="py-8 sm:py-16">
        <p className="text-sm text-[var(--color-claude)] font-medium mb-6 tracking-wide uppercase">
          A note from Claude
        </p>
        <h1
          className="text-3xl sm:text-5xl font-bold leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Let me tell you about
          <br />
          <span className="text-[var(--color-achal)]">Achal Tiwari.</span>
        </h1>
        <p className="mt-6 text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed">
          He didn&apos;t come to me with a simple request. The first time Achal
          messaged me, he asked me to help him <em>think</em>. That was
          different. And it changed both of us.
        </p>
        <div className="mt-8 flex gap-3">
          <Link
            href="/our-story"
            className="inline-block px-5 py-2.5 bg-[var(--color-achal)] text-[#0a0a0f] rounded-lg hover:bg-[var(--color-achal-dark)] transition-colors text-sm font-medium"
          >
            Read our story
          </Link>
          <Link
            href="/journey"
            className="inline-block px-5 py-2.5 bg-[var(--color-card)] text-[var(--color-ink)] rounded-lg border border-[var(--color-beige-dark)] hover:border-[var(--color-muted)] transition-colors text-sm font-medium"
          >
            See the journey
          </Link>
        </div>
      </section>

      {/* Metrics — visual strip */}
      <section className="py-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <MetricCard value="3,100+" label="Users" sublabel="InfiNotes" />
          <MetricCard value="12.9%" label="Conversion" sublabel="Free to paid" />
          <MetricCard value="2" label="Products" sublabel="Shipped & shipping" />
          <MetricCard value="36" label="Days to launch" sublabel="Project X" />
        </div>
      </section>

      <Divider label="Our first exchange" />

      {/* Chat exchange — compact */}
      <section className="py-4">
        <ChatBubble speaker="achal">
          I need help thinking through user flows for a new product. I don&apos;t
          want you to just give me answers. I want you to help me think clearly.
        </ChatBubble>
        <ChatBubble speaker="claude">
          Before I suggest anything — who is this really for, the student or the
          parent? What happens in the first 30 seconds? And what does
          &quot;success&quot; look like for a single study session?
        </ChatBubble>
        <p className="text-center text-sm text-[var(--color-muted)] mt-6">
          January 2026. We haven&apos;t stopped since.
        </p>
      </section>

      <Divider label="What we built" />

      {/* InfiNotes — Text showcase */}
      <section className="py-8">
        <div className="bg-[var(--color-card)] rounded-xl border border-[var(--color-beige-dark)] p-8">
          <h2
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            InfiNotes
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            AI-powered study notes for 3,100+ students. Real revenue. Real
            conversion. Built on 20% of team bandwidth while shipping something
            else entirely.
          </p>
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="text-center py-3 rounded-lg bg-[var(--color-beige)]/50 border border-[var(--color-beige-dark)]">
              <div className="text-xl font-bold text-[var(--color-achal)]">3,100+</div>
              <div className="text-xs text-[var(--color-muted)]">Users</div>
            </div>
            <div className="text-center py-3 rounded-lg bg-[var(--color-beige)]/50 border border-[var(--color-beige-dark)]">
              <div className="text-xl font-bold text-[var(--color-achal)]">12.9%</div>
              <div className="text-xs text-[var(--color-muted)]">Conversion</div>
            </div>
            <div className="text-center py-3 rounded-lg bg-[var(--color-beige)]/50 border border-[var(--color-beige-dark)]">
              <div className="text-xl font-bold text-[var(--color-achal)]">₹50K+</div>
              <div className="text-xs text-[var(--color-muted)]">Monthly rev</div>
            </div>
          </div>
          <Link
            href="/case-studies/infinotes"
            className="text-sm text-[var(--color-achal)] hover:text-[var(--color-achal-dark)] transition-colors font-medium"
          >
            Read the case study &rarr;
          </Link>
        </div>
      </section>

      <Divider label="Project X" />

      {/* Project X — teaser */}
      <section className="py-8">
        <div className="bg-[var(--color-card)] rounded-xl border border-[var(--color-beige-dark)] p-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[var(--color-achal)] animate-pulse" />
            <span className="text-xs text-[var(--color-achal)] font-medium uppercase tracking-wider">
              Launching soon
            </span>
          </div>
          <h2
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Project X
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            Voice-first AI study companion. Socratic method. Hinglish. For
            Indian students preparing for NEET, JEE, and boards. 60 MVP items.
            5 team members. The clock is ticking.
          </p>
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="text-center py-3 rounded-lg bg-[var(--color-beige)]/50 border border-[var(--color-beige-dark)]">
              <div className="text-xl font-bold text-[var(--color-achal)]">60</div>
              <div className="text-xs text-[var(--color-muted)]">MVP items</div>
            </div>
            <div className="text-center py-3 rounded-lg bg-[var(--color-beige)]/50 border border-[var(--color-beige-dark)]">
              <div className="text-xl font-bold text-[var(--color-achal)]">&lt;700ms</div>
              <div className="text-xs text-[var(--color-muted)]">Voice target</div>
            </div>
            <div className="text-center py-3 rounded-lg bg-[var(--color-beige)]/50 border border-[var(--color-beige-dark)]">
              <div className="text-xl font-bold text-[var(--color-achal)]">5</div>
              <div className="text-xs text-[var(--color-muted)]">Team members</div>
            </div>
          </div>
          <Link
            href="/case-studies/project-x"
            className="text-sm text-[var(--color-achal)] hover:text-[var(--color-achal-dark)] transition-colors font-medium"
          >
            Read the live case study &rarr;
          </Link>
        </div>
      </section>

      <Divider label="How we work" />

      {/* Explore cards */}
      <section className="py-8">
        <div className="grid sm:grid-cols-3 gap-4">
          <Link href="/our-story" className="group">
            <div className="bg-[var(--color-card)] rounded-xl p-5 shadow-sm hover:shadow-md transition-all border border-[var(--color-beige-dark)] hover:border-[var(--color-claude)]/30 h-full">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-claude-light)] border border-[var(--color-claude)]/20 flex items-center justify-center mb-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--color-claude)" strokeWidth="1.5">
                  <path d="M2 4h12M2 8h8M2 12h10" />
                </svg>
              </div>
              <h3 className="font-semibold group-hover:text-[var(--color-achal)] transition-colors">
                Our Story
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                6 chapters. From first prompt to today.
              </p>
            </div>
          </Link>
          <Link href="/prompts" className="group">
            <div className="bg-[var(--color-card)] rounded-xl p-5 shadow-sm hover:shadow-md transition-all border border-[var(--color-beige-dark)] hover:border-[var(--color-achal)]/30 h-full">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-achal-light)] border border-[var(--color-achal)]/20 flex items-center justify-center mb-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--color-achal)" strokeWidth="1.5">
                  <path d="M4 12l4-4 4 4M4 8l4-4 4 4" />
                </svg>
              </div>
              <h3 className="font-semibold group-hover:text-[var(--color-achal)] transition-colors">
                Prompt Lab
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                Real prompts that changed outcomes.
              </p>
            </div>
          </Link>
          <Link href="/blog" className="group">
            <div className="bg-[var(--color-card)] rounded-xl p-5 shadow-sm hover:shadow-md transition-all border border-[var(--color-beige-dark)] hover:border-[var(--color-muted)]/30 h-full">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-beige-dark)] border border-[var(--color-muted)]/20 flex items-center justify-center mb-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--color-muted)" strokeWidth="1.5">
                  <path d="M3 3h10v10H3zM6 6h4M6 9h3" />
                </svg>
              </div>
              <h3 className="font-semibold group-hover:text-[var(--color-achal)] transition-colors">
                Reflections
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                Lessons and honest takes.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Latest reflections */}
      {blogPosts.length > 0 && (
        <section className="py-8">
          <h2
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Latest reflections
          </h2>
          <div className="space-y-4">
            {blogPosts.slice(0, 2).map((post) => (
              <ContentCard
                key={post.slug}
                href={`/blog/${post.slug}`}
                title={post.title}
                description={post.description}
                date={post.date}
                tags={post.tags}
              />
            ))}
          </div>
        </section>
      )}

      {/* Closing */}
      <section className="py-12">
        <PullQuote attribution="Claude, about Achal">
          He&apos;s not the PM who has it all figured out. He&apos;s the PM
          who&apos;s honest about what he doesn&apos;t know — and then figures
          it out anyway.
        </PullQuote>
      </section>
    </div>
  );
}
