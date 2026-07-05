import Link from "next/link";
import ChatBubble from "@/components/ChatBubble";
import MetricCard from "@/components/MetricCard";
import Divider from "@/components/Divider";
import PullQuote from "@/components/PullQuote";
import { getAllContent } from "@/lib/mdx";
import { BlogPostMeta } from "@/lib/types";
import ContentCard from "@/components/ContentCard";
import ContactCTA from "@/components/ContactCTA";
import Hero3D from "@/components/Hero3D";

export default function Home() {
  const blogPosts = getAllContent<BlogPostMeta>("blog");

  return (
    <div>
      {/* Hero */}
      <section className="pt-4 pb-14 sm:pt-8 sm:pb-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-4 items-center">
          {/* Copy */}
          <div className="order-2 md:order-1">
            <p className="eyebrow mb-6">
              Product Manager · builds 0→1 · directs AI
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold leading-[0.95]">
              <span className="chrome-text">Ideas</span>
              <br />
              <span className="chrome-text">to live products.</span>
              <br />
              <span className="text-[var(--color-achal)]">Fast.</span>
            </h1>
            <p className="mt-7 text-lg text-[var(--color-muted)] max-w-md leading-relaxed">
              I’m Achal Tiwari — a PM who builds. I ship real 0→1 AI products
              across edtech, consumer, and beyond, by directing AI instead of
              just writing specs.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--color-claude)] bg-[var(--color-claude-light)] border border-[var(--color-claude)]/20 rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)]" />
              Open to Senior / AI-PM roles · UK + India
            </div>
            <div className="mt-8 flex gap-3 flex-wrap">
              <Link
                href="/case-studies"
                className="inline-block px-5 py-2.5 bg-[var(--color-achal)] text-[#08080b] rounded-md hover:bg-[var(--color-achal-dark)] transition-colors text-sm font-medium"
              >
                See the work
              </Link>
              <Link
                href="/contact"
                className="inline-block px-5 py-2.5 bg-transparent text-[var(--color-ink)] rounded-md border border-[var(--color-beige-dark)] hover:border-[var(--color-claude)] transition-colors text-sm font-medium"
              >
                Get in touch
              </Link>
            </div>
          </div>

          {/* 3D monogram */}
          <div className="order-1 md:order-2">
            <Hero3D />
          </div>
        </div>

        <p className="mt-12 text-sm text-[var(--color-muted)] max-w-2xl leading-relaxed">
          I built and co-wrote this entire site — copy, code, the 3D, and the
          design — by directing Claude. That’s the skill I’m selling. Every
          number here is real and mine.{" "}
          <Link
            href="/our-story"
            className="text-[var(--color-claude)] hover:underline"
          >
            Read the story &rarr;
          </Link>
        </p>
      </section>

      {/* Metrics */}
      <section className="py-6">
        <p className="eyebrow mb-5">What that looks like in numbers</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <MetricCard value="10K+" label="Users" sublabel="InfiNotes, organic" />
          <MetricCard value="12.9%" label="Free → paid" sublabel="conversion" />
          <MetricCard value="6+" label="Products" sublabel="shipped & live" />
          <MetricCard value="5 wks" label="To profit" sublabel="InfiNotes" />
        </div>
      </section>

      <Divider label="Selected work" />

      {/* Product showcases */}
      <section className="py-6 grid sm:grid-cols-2 gap-4">
        <div className="bg-[var(--color-card)] rounded-lg border border-[var(--color-beige-dark)] p-7 hover:border-[var(--color-achal)]/40 transition-colors">
          <p className="eyebrow mb-3">Live · owner</p>
          <h2 className="text-2xl font-bold mb-3">InfiNotes</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-5 text-sm">
            AI study-notes platform. 10,000+ users, 12.9% free-to-paid,
            profitable in five weeks — built on 20% team bandwidth while shipping
            something else entirely.
          </p>
          <Link
            href="/case-studies/infinotes"
            className="text-sm text-[var(--color-achal)] hover:text-[var(--color-achal-dark)] transition-colors font-medium"
          >
            Read the case study &rarr;
          </Link>
        </div>

        <div className="bg-[var(--color-card)] rounded-lg border border-[var(--color-beige-dark)] p-7 hover:border-[var(--color-achal)]/40 transition-colors">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-achal)] animate-pulse" />
            <p className="eyebrow">In market prep · owner</p>
          </div>
          <h2 className="text-2xl font-bold mb-3">Project X</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-5 text-sm">
            A text-first AI companion for students — Hinglish, peer-toned, priced
            off a token economy I modelled from real per-model cost. Shipping on
            readiness, not a calendar.
          </p>
          <Link
            href="/case-studies/project-x"
            className="text-sm text-[var(--color-achal)] hover:text-[var(--color-achal-dark)] transition-colors font-medium"
          >
            Read the live case study &rarr;
          </Link>
        </div>
      </section>

      <Divider label="How I work with AI" />

      {/* Chat exchange */}
      <section className="py-4">
        <ChatBubble speaker="achal">
          I need help thinking through user flows for a new product. I don&apos;t
          want you to just give me answers. I want you to help me think clearly.
        </ChatBubble>
        <ChatBubble speaker="claude">
          Before I suggest anything — who is this really for, the student or the
          parent? What happens in the first 30 seconds? And what does
          &quot;success&quot; look like for a single session?
        </ChatBubble>
        <p className="text-center text-sm text-[var(--color-muted)] mt-6">
          January 2026. We haven&apos;t stopped since.
        </p>
      </section>

      <Divider label="Go deeper" />

      {/* Explore cards */}
      <section className="py-6">
        <div className="grid sm:grid-cols-3 gap-4">
          <Link href="/our-story" className="group">
            <div className="bg-[var(--color-card)] rounded-lg p-5 border border-[var(--color-beige-dark)] hover:border-[var(--color-claude)]/40 transition-colors h-full">
              <h3 className="font-semibold group-hover:text-[var(--color-achal)] transition-colors">
                Our Story
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                Twelve chapters. From the first prompt to now.
              </p>
            </div>
          </Link>
          <Link href="/prompts" className="group">
            <div className="bg-[var(--color-card)] rounded-lg p-5 border border-[var(--color-beige-dark)] hover:border-[var(--color-achal)]/40 transition-colors h-full">
              <h3 className="font-semibold group-hover:text-[var(--color-achal)] transition-colors">
                Prompt Lab
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                Real prompts that changed outcomes.
              </p>
            </div>
          </Link>
          <Link href="/blog" className="group">
            <div className="bg-[var(--color-card)] rounded-lg p-5 border border-[var(--color-beige-dark)] hover:border-[var(--color-claude)]/40 transition-colors h-full">
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
          <h2 className="text-2xl font-bold mb-6">Latest reflections</h2>
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
      <section className="pt-12">
        <PullQuote attribution="Achal Tiwari">
          I’m not the PM who has it all figured out. I’m the one who’s honest
          about what I don’t know — and then figures it out anyway.
        </PullQuote>
      </section>

      <ContactCTA />
    </div>
  );
}
