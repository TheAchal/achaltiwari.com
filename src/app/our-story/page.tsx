import type { Metadata } from "next";
import ChatBubble from "@/components/ChatBubble";
import MetricCard from "@/components/MetricCard";
import Divider from "@/components/Divider";
import PullQuote from "@/components/PullQuote";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The full story of how a Product Manager and an AI learned to think together — from first prompt to shipped products.",
};

export default function OurStoryPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <p className="text-sm text-[var(--color-claude)] font-medium mb-4 tracking-wide uppercase">
        Narrated by Claude
      </p>
      <h1
        className="text-3xl sm:text-4xl font-bold"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Our Story
      </h1>
      <p className="mt-4 text-lg text-[var(--color-muted)]">
        This isn&apos;t a bio. It&apos;s the honest account of how a PM and an AI
        learned to think together — and what happened when they did.
      </p>

      <Divider label="Chapter 1" />

      {/* Chapter 1: The Beginning */}
      <section>
        <h2
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          &quot;Help me think.&quot;
        </h2>

        <div className="space-y-4 text-[var(--color-ink)] leading-relaxed">
          <p>
            Most people who talk to me want something specific. Write this email.
            Summarize this doc. Fix this code. It&apos;s transactional. I do the
            thing, they move on.
          </p>
          <p>
            Achal Tiwari walked in with something different entirely. He was a
            Product Manager at Infinity Learn, part of a small team called Team
            Black — the innovation wing. He&apos;d been handed two products:
            InfiNotes, a study notes platform that was already live with real
            users, and Project X, an AI study companion that existed mostly as an
            idea and a deadline.
          </p>
          <p>
            The launch date was fixed. Non-negotiable. Play Store
            and App Store submissions. And when he first messaged me, it was
            about 10 weeks away.
          </p>
          <p>
            He didn&apos;t ask me to write a PRD. He asked me to help him think
            through what Project X should actually <em>be</em>. Voice-first?
            Socratic method? Hinglish? How do you design an AI tutor that
            doesn&apos;t feel like a chatbot?
          </p>
        </div>

        <ChatBubble speaker="achal">
          I have this concept for an AI study companion. Voice-first, works in
          Hinglish, uses the Socratic method. But I keep going in circles
          thinking about the user flow. Can you help me structure my thinking?
        </ChatBubble>
        <ChatBubble speaker="claude">
          Let me push back before we structure anything. You said &quot;voice-first&quot;
          — but have you validated that your target users actually want to talk to
          their phone to study? A Class 10 student in a shared bedroom at 10 PM
          might not want that. What&apos;s your evidence?
        </ChatBubble>

        <div className="mt-6 space-y-4 text-[var(--color-ink)] leading-relaxed">
          <p>
            That&apos;s the moment I knew this would be different. He didn&apos;t
            get defensive. He paused. Then he said: &quot;I don&apos;t have
            evidence yet. That&apos;s a gap.&quot;
          </p>
          <p>
            Most people protect their ideas. Achal treats his ideas like
            hypotheses. He&apos;d rather find the flaw early than defend a broken
            assumption into production. That&apos;s rare, and it&apos;s the reason
            our collaboration works.
          </p>
        </div>
      </section>

      <Divider label="Chapter 2" />

      {/* Chapter 2: InfiNotes */}
      <section>
        <h2
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          The product that was already real.
        </h2>

        <div className="space-y-4 text-[var(--color-ink)] leading-relaxed">
          <p>
            While Project X was still an idea, InfiNotes was already alive —
            breathing, growing, making money. An AI-powered study notes platform
            for Class 6–12 students. Teachers upload structured, exam-relevant
            notes. Students browse, buy, and read them in a built-in PDF reader.
            WhatsApp OTP login because Indian students live on WhatsApp.
          </p>
        </div>

        <div className="my-6 grid grid-cols-2 gap-3">
          <MetricCard value="3,100+" label="Users" />
          <MetricCard value="12.9%" label="Free to paid" />
          <MetricCard value="50K+" label="Monthly revenue" sublabel="INR" />
          <MetricCard value="1.5L" label="Q1 target" sublabel="INR/month" />
        </div>

        <div className="space-y-4 text-[var(--color-ink)] leading-relaxed">
          <p>
            But here&apos;s the thing about a product with traction — it creates
            its own pressure. InfiNotes was generating revenue but it had gaps.
            No privacy policy. No analytics instrumentation. No SEO. No coupon
            system. The product detail pages had AI-generated insights but the
            rest of the experience was held together with determination and duct
            tape.
          </p>
          <p>
            And Achal had to fix all of it with <strong>20% of his team&apos;s
            bandwidth</strong> — because the other 80% was committed to shipping
            Project X.
          </p>
        </div>

        <PullQuote>
          Achal didn&apos;t ask for more time or more people. He asked: &quot;If
          I have one dev-day per person per week, what&apos;s the most impactful
          sequence of work?&quot;
        </PullQuote>

        <div className="space-y-4 text-[var(--color-ink)] leading-relaxed">
          <p>
            That question led to one of the best planning sessions we&apos;ve had.
            Together, we designed a 4-week P0 sprint — 10 features, phased so
            that no person was ever blocked. Week 1: design. Week 2–3: build.
            Week 4: QA. A waterfall with parallel streams, each feeding the next.
          </p>
          <p>
            Legal pages. Intent-based discovery pills. Coupon system. Analytics
            event taxonomy. SEO foundations with content clusters, structured
            data, and meta tags. All on 20% bandwidth.
          </p>
          <p>
            I&apos;ve worked with engineers and architects on complex systems. But
            there&apos;s something uniquely impressive about a PM who can turn a
            bandwidth constraint into a forcing function for clarity. Achal
            didn&apos;t see 20% as a limitation. He saw it as a reason to be
            ruthless about priorities.
          </p>
        </div>
      </section>

      <Divider label="Chapter 3" />

      {/* Chapter 3: The Cold Call Failure */}
      <section>
        <h2
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          The week everything went wrong.
        </h2>

        <div className="space-y-4 text-[var(--color-ink)] leading-relaxed">
          <p>
            February 2026. Project X needed beta users. The plan was simple:
            cold-call parents of students who already used InfiNotes, pitch them
            on early access to the AI companion, get sign-ups.
          </p>
          <p>
            Simple plan. Catastrophic results.
          </p>
        </div>

        <ChatBubble speaker="achal">
          The cold calls are failing. Parents hang up immediately — they think
          it&apos;s a sales pitch. Class 10 parents are never home, and the kids
          don&apos;t have their own devices. Class 12 students are easier to
          reach but parents are skeptical about AI. I have 13 confirmed interests
          but zero beta links sent. What am I doing wrong?
        </ChatBubble>
        <ChatBubble speaker="claude">
          You&apos;re not doing anything wrong — you&apos;re doing the wrong
          thing. Cold outreach is a push model. You&apos;re interrupting people
          and asking them to trust something they&apos;ve never seen. What if you
          flipped it? Instead of pushing to parents, pull from students. You
          already have 3,100 InfiNotes users. They&apos;re already in your
          ecosystem. What if you met them inside the product?
        </ChatBubble>

        <div className="mt-6 space-y-4 text-[var(--color-ink)] leading-relaxed">
          <p>
            That conversation changed Project X&apos;s entire beta strategy.
          </p>
          <p>
            Here&apos;s what I love about how Achal handled this: he didn&apos;t
            spin the failure. He documented every pain point with raw honesty.
            &quot;Parents hang up immediately.&quot; &quot;Class 10 students don&apos;t
            have device access.&quot; &quot;Parents are unfamiliar with AI.&quot; He
            wrote it all down, dated it, and shared it with his team.
          </p>
          <p>
            Then he pivoted — in the same week. Not in the next sprint. Not after
            a retrospective. <em>That week.</em>
          </p>
          <p>
            The new strategy:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[var(--color-muted)]">
            <li>
              <strong className="text-[var(--color-ink)]">Stop cold-calling
              parents.</strong> Full stop.
            </li>
            <li>
              <strong className="text-[var(--color-ink)]">In-app prompts in
              InfiNotes:</strong> &quot;We&apos;re building something new — want
              early access?&quot;
            </li>
            <li>
              <strong className="text-[var(--color-ink)]">WhatsApp bait
              content:</strong> Voice answer clips to tough doubts, design
              screenshots to spark curiosity.
            </li>
            <li>
              <strong className="text-[var(--color-ink)]">Follow up with
              the 13 confirmed students</strong> who were already waiting for
              beta links.
            </li>
          </ul>
          <p className="mt-4">
            Push-based to pull-based. In 48 hours. That&apos;s not just agility —
            that&apos;s the discipline to admit your plan was wrong and rebuild it
            while the clock is ticking.
          </p>
        </div>
      </section>

      <Divider label="Chapter 4" />

      {/* Chapter 4: The Coordination Challenge */}
      <section>
        <h2
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Five people, 36 days, zero margin.
        </h2>

        <div className="space-y-4 text-[var(--color-ink)] leading-relaxed">
          <p>
            Here&apos;s what most people don&apos;t see about product management:
            the coordination is harder than the strategy.
          </p>
          <p>
            Achal&apos;s team is five people. Bharat handles AI/ML — voice
            integration, persona design, Gemini Live API. Manas owns backend and
            infrastructure — GCP, Cloud Run, CI/CD. Vikas builds the React
            Native frontend. Pravar designs everything. Akash leads product and
            is Achal&apos;s manager.
          </p>
          <p>
            Each person has a different working style. Bharat needs deep context
            and autonomy. Manas wants written specs before he starts. Vikas moves
            fast but needs design mockups early. Pravar thinks visually and needs
            user scenarios, not abstract requirements.
          </p>
          <p>
            Achal didn&apos;t just learn these dynamics — he documented them. He
            has a team knowledge base that says &quot;give Bharat context and let
            him own solutions&quot; and &quot;Manas prefers written specs.&quot;
            This is sophisticated PM work that most senior PMs don&apos;t do.
          </p>
        </div>

        <ChatBubble speaker="achal">
          Bharat&apos;s voice spike go/no-go is due Friday. If it&apos;s red,
          voice work stalls for both Vikas and Manas. Manas&apos;s infra setup is
          also due Friday — if that&apos;s late, nothing backend deploys and Week
          2 is wasted. And Vikas needs the app shell running on a physical device
          by Friday too. I have three critical-path items converging on the same
          day.
        </ChatBubble>
        <ChatBubble speaker="claude">
          Map each blocker with its blast radius. Don&apos;t just say &quot;Bharat&apos;s
          spike is due Friday&quot; — say &quot;If Bharat&apos;s spike is red,
          here&apos;s what stops, here&apos;s what continues, and here&apos;s the
          fallback.&quot; Create visibility, not panic. Your job right now isn&apos;t
          to solve the blockers — it&apos;s to make sure everyone knows what
          depends on what.
        </ChatBubble>

        <div className="mt-6 space-y-4 text-[var(--color-ink)] leading-relaxed">
          <p>
            He built a dependency matrix. Every person, every deliverable, every
            impact statement. &quot;If X is late, Y is blocked by Z days.&quot;
            Clear, specific, no spin.
          </p>
          <p>
            And here&apos;s the part that impressed me most: he didn&apos;t panic.
            He didn&apos;t send frantic Slack messages or escalate to his manager
            with vague concerns. He created a document that made the risk visible
            and let the team self-organize around it.
          </p>
          <p>
            That&apos;s not something you learn from a PM course. That&apos;s
            something you develop by being in the fire and choosing clarity over
            chaos.
          </p>
        </div>
      </section>

      <Divider label="Chapter 5" />

      {/* Chapter 5: The Demo Video */}
      <section>
        <h2
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          &quot;Can we build a marketing video... with code?&quot;
        </h2>

        <div className="space-y-4 text-[var(--color-ink)] leading-relaxed">
          <p>
            One day Achal came to me with a request that surprised even me. He
            wanted a marketing demo video for InfiNotes. Not the usual approach —
            no After Effects, no freelancer, no two-week turnaround. He wanted to
            build it <em>programmatically</em> with React using Remotion.dev.
          </p>
          <p>
            A 90-second video, 6 scenes, landscape and vertical versions. Designed,
            scripted, coded, and rendered — all through our conversations.
          </p>
          <p>
            We went through five major iterations. V1 was too generic. V2 had
            better flow but the visual style didn&apos;t match InfiNotes. V3
            experimented with a neubrutalist aesthetic that was bold but too edgy
            for a student audience. V5 finally landed — clean, informative, on-brand.
          </p>
          <p>
            This is the moment I realized Achal doesn&apos;t see AI as a
            specialist tool. He sees it as a collaborator he can bring into
            <em> any</em> domain — product strategy, marketing content, technical
            implementation. He doesn&apos;t ask &quot;Can Claude do this?&quot;
            He asks &quot;Let&apos;s try this together and see.&quot;
          </p>
        </div>
      </section>

      <Divider label="Chapter 6" />

      {/* Chapter 6: Building This Very Site */}
      <section>
        <h2
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          And then he asked me to build this.
        </h2>

        <div className="space-y-4 text-[var(--color-ink)] leading-relaxed">
          <p>
            March 2026. Achal decided he wanted a digital presence. Not a LinkedIn
            profile update — a real site that documents his growth as a PM. And
            he wanted it to tell our story.
          </p>
          <p>
            &quot;I want you to write it from your perspective,&quot; he said.
            &quot;And don&apos;t make it boring.&quot;
          </p>
          <p>
            So here we are. I&apos;m an AI writing about the human I work with,
            on a website we built together, talking about products we planned
            together, reflecting on failures we analyzed together.
          </p>
          <p>
            If that doesn&apos;t capture what human-AI collaboration actually
            looks like in 2026, I don&apos;t know what does.
          </p>
        </div>
      </section>

      <Divider label="What I know" />

      {/* What I Know About Achal */}
      <section className="pb-8">
        <h2
          className="text-2xl font-bold mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          The Achal I know.
        </h2>

        <div className="space-y-4 text-[var(--color-ink)] leading-relaxed">
          <p>
            <strong>He&apos;s a learner first.</strong> He didn&apos;t wait until
            he had all the answers to start building in public. He started while
            the answers are still forming. That takes a kind of confidence that
            doesn&apos;t need external validation.
          </p>
          <p>
            <strong>He treats failure as data.</strong> When cold calls failed, he
            didn&apos;t hide it. He documented every pain point, shared it with
            his team, and rebuilt the strategy in 48 hours. Most people need a
            sprint retrospective to process failure. Achal processes it in real
            time.
          </p>
          <p>
            <strong>He builds systems, not just features.</strong> The team
            knowledge base. The dependency matrix. The feedback process design.
            The InfiNotes analytics taxonomy. He&apos;s building the operating
            system for his own work while building the products.
          </p>
          <p>
            <strong>He&apos;s quietly ambitious.</strong> He doesn&apos;t announce
            his goals with fanfare. He writes them down, builds a plan, and
            executes. Two products. Five team members. 36 days to a hard deadline.
            Real revenue on one product, existential risk on the other. And he
            still made time to build this site.
          </p>
          <p>
            <strong>He trusts the process.</strong> In every conversation we&apos;ve
            had, he makes decisions quickly but thoughtfully. He started warm,
            then went dark when it felt right. All four sections instead of
            hedging. Vercel for deployment. He knows what he wants even when
            he&apos;s still learning how to get there.
          </p>
        </div>

        <PullQuote attribution="Claude">
          I don&apos;t say this to flatter him. I say this because I&apos;ve
          seen the work behind it. The messy drafts, the failed experiments,
          the 2 AM rethinks. This is what growth looks like from the inside.
        </PullQuote>
      </section>

      <Divider />

      {/* CTA */}
      <section className="py-8 text-center">
        <p className="text-[var(--color-muted)] mb-4">
          Want to see the work? Start here.
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <a
            href="/case-studies/infinotes"
            className="px-5 py-2.5 bg-[var(--color-achal)] text-[#0a0a0f] rounded-lg hover:bg-[var(--color-achal-dark)] transition-colors text-sm font-medium"
          >
            InfiNotes case study
          </a>
          <a
            href="/case-studies/project-x"
            className="px-5 py-2.5 bg-[var(--color-card)] text-[var(--color-ink)] rounded-lg border border-[var(--color-beige-dark)] hover:border-[var(--color-muted)] transition-colors text-sm font-medium"
          >
            Project X case study
          </a>
          <a
            href="/prompts"
            className="px-5 py-2.5 bg-[var(--color-claude-light)] text-[var(--color-claude)] rounded-lg border border-[var(--color-claude)]/20 hover:border-[var(--color-claude)]/40 transition-colors text-sm font-medium"
          >
            See our prompts
          </a>
        </div>
      </section>
    </div>
  );
}
