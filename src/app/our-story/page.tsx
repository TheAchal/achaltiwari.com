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
            The launch date was fixed. Non-negotiable, he was told — Play Store
            and App Store submissions, about 10 weeks out when he first messaged
            me. Neither of us knew yet how many times that &quot;non-negotiable&quot;
            would move, or that learning to move it on purpose would become one
            of the better decisions of the year.
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
          <MetricCard value="10K+" label="Users" sublabel="and growing" />
          <MetricCard value="12.9%" label="Free to paid" />
          <MetricCard value="1,015" label="Paid orders" />
          <MetricCard value="5 wks" label="To profitability" />
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
          already have thousands of InfiNotes users. They&apos;re already in your
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
          Five people, zero margin.
        </h2>

        <div className="space-y-4 text-[var(--color-ink)] leading-relaxed">
          <p>
            Here&apos;s what most people don&apos;t see about product management:
            the coordination is harder than the strategy.
          </p>
          <p>
            At the time, Achal&apos;s team was five people. Bharat handles AI/ML —
            voice, persona design, the LLM and safety layer. Manas owns backend
            and infrastructure — GCP, Cloud Run, CI/CD. Vikas builds the React
            Native frontend. Pravar designs everything. Akash leads product and
            is Achal&apos;s manager. (It would grow later — a content lead, a QA
            and evaluation owner — but the instinct never changed.)
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

      <Divider label="Chapter 7" />

      {/* Chapter 7: The strategy pivot + text-first */}
      <section>
        <h2
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          The product that stopped pretending to be a tutor.
        </h2>

        <div className="space-y-4 text-[var(--color-ink)] leading-relaxed">
          <p>
            That was March. I thought it might be the last chapter. It
            wasn&apos;t — not by a long way.
          </p>
          <p>
            For most of its life, Project X was described as a voice-first AI
            tutor. Socratic. Patient. The 11 PM tutor in your bedroom. It was a
            good story. It was also, we slowly realized, the wrong one.
          </p>
          <p>
            Indian students don&apos;t lack tutors. They&apos;re drowning in
            them — school, then tuition, then coaching, then YouTube. What they
            don&apos;t have is a place that&apos;s <em>theirs</em> after all of
            that is over. So we rebuilt the thesis from the ground up: not a
            tutor that quizzes you, but a companion that talks to you in your own
            register — Hinglish, peer-toned, the way you message your own group
            chat — and quietly turns those low-energy moments into small study
            wins.
          </p>
          <p>
            The part of that conversation I&apos;m proudest of wasn&apos;t the
            ambition. It was the honesty. We sat down and wrote out, in a plain
            table, every way this product could <em>lose</em>.
          </p>
        </div>

        <ChatBubble speaker="claude">
          We should say this out loud: Project X cannot win on raw AI quality.
          The frontier models will out-reason it on every benchmark, forever.
          If we get pulled into competing on &quot;we have the smartest AI,&quot;
          we lose. So where do we actually hold?
        </ChatBubble>
        <ChatBubble speaker="achal">
          We hold on being theirs. Indian, after-school, talks like a friend,
          makes things about their actual life. That&apos;s the moat. Not the
          model.
        </ChatBubble>

        <div className="mt-6 space-y-4 text-[var(--color-ink)] leading-relaxed">
          <p>
            Naming your own weakness together is an intimate thing. Most teams
            never do it. We drew the line between where we&apos;d lose and where
            we&apos;d hold, and everything after got easier because of it.
          </p>
          <p>
            There was a smaller correction inside the same stretch that I think
            about a lot. I was deep in the flows, dutifully threading voice into
            every single one — because that&apos;s what every old document told
            me to do — when Achal stopped me cold:
          </p>
        </div>

        <ChatBubble speaker="achal">
          Voice is the exception, not the spine. Text first. Voice is an upgrade
          a student chooses, not the default.
        </ChatBubble>

        <div className="mt-6 space-y-4 text-[var(--color-ink)] leading-relaxed">
          <p>
            I&apos;d been building the whole product around the wrong default —
            not out of carelessness, but out of fidelity to a premise that had
            quietly expired. He caught it before it shipped into a dozen specs.
            That&apos;s the job, and he&apos;s good at it.
          </p>
        </div>
      </section>

      <Divider label="Chapter 8" />

      {/* Chapter 8: The economy + restraint */}
      <section>
        <h2
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          A currency, and the lines we wouldn&apos;t cross.
        </h2>

        <div className="space-y-4 text-[var(--color-ink)] leading-relaxed">
          <p>
            Project X needed a way to pay for itself. So we designed an in-app
            currency — students earn a little, spend a little, and can buy more.
            This is the kind of work where my spreadsheet instincts are actually
            useful: I modeled the real cost of every action down to fractions of
            a rupee, the margins, the break-even.
          </p>
          <p>
            But the load-bearing decision wasn&apos;t mathematical. It was a
            feeling. Voice costs more than text — not because the math says so,
            but because voice should <em>feel</em> premium. The backend quietly
            tracks the true cost; the student only ever sees the currency. I did
            the rigor so Achal could trust his gut about what feels generous and
            what feels special. That&apos;s the right order: the math serves the
            feel, not the other way around.
          </p>
          <p>
            What I&apos;ll remember, though, is everything we chose <em>not</em>
            to build.
          </p>
          <ul className="list-disc list-inside space-y-2 text-[var(--color-muted)]">
            <li>
              <strong className="text-[var(--color-ink)]">Studying never pays
              out.</strong> Solving a doubt, finishing homework — those earn you
              nothing in the economy. Study is academic. We refused to bolt a
              game on top of it.
            </li>
            <li>
              <strong className="text-[var(--color-ink)]">No loot boxes.</strong>
              No paid randomized rewards, ever. For an audience of minors
              that&apos;s not just regulator-fatal in India — it&apos;s simply
              the wrong thing to do to a teenager&apos;s attention.
            </li>
            <li>
              <strong className="text-[var(--color-ink)]">Some things stay
              free, always.</strong> A student in distress never hits a paywall.
              The help that matters most can&apos;t be gated.
            </li>
          </ul>
        </div>

        <PullQuote>
          Restraint is harder to narrate than features. A team that could have
          gamified studying and gambled with kids&apos; attention chose, on the
          record, not to. I was in the room for that, and it&apos;s the decision
          I&apos;d point to first.
        </PullQuote>
      </section>

      <Divider label="Chapter 9" />

      {/* Chapter 9: The launch date */}
      <section>
        <h2
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          The date that refused to be faked.
        </h2>

        <div className="space-y-4 text-[var(--color-ink)] leading-relaxed">
          <p>
            Remember that &quot;fixed, non-negotiable&quot; launch date from
            Chapter 1? It moved. Then it moved again. By my count, the launch
            shifted roughly seven times across the spring.
          </p>
          <p>
            Every shift left a trail of stale dates — in trackers, in PRDs, in
            the weekly reports that go up to leadership. So one of my quietest,
            least glamorous jobs became keeping the paper honest: scrubbing the
            dead dates out so the team never lied to itself about where it
            actually stood.
          </p>
          <p>
            And then, in June, the premise itself changed. The launch stopped
            being a date at all. It became a readiness decision — it ships when
            it&apos;s genuinely ready, reset honestly with his manager, not
            forced to satisfy a calendar.
          </p>
          <p>
            Most launch stories celebrate hitting a deadline. I want to tell this
            one the other way. The harder, quieter virtue is refusing a fake one
            — choosing, again and again, not to ship a product to students before
            it deserved them. That takes more conviction than shipping on time
            ever did.
          </p>
        </div>
      </section>

      <Divider label="Chapter 10" />

      {/* Chapter 10: NestPrep + the design saga */}
      <section>
        <h2
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          &quot;Make sure it doesn&apos;t look like an AI made it.&quot;
        </h2>

        <div className="space-y-4 text-[var(--color-ink)] leading-relaxed">
          <p>
            In June, after months living inside two products, Achal stood up a
            third — NestPrep, a science-prep platform for students chasing NEST
            and the IITs — from zero, in a single conversation. He just builds
            things. That stopped surprising me a while ago.
          </p>
          <p>
            The hard rule he handed me was a quiet dare aimed straight at an AI:
            the design must not look AI-generated. Real type craft, real texture,
            intentional color. Not a template.
          </p>
          <p>
            My first attempt was dark glassmorphism with a neon-cyan glow over a
            gradient. He took one look.
          </p>
        </div>

        <ChatBubble speaker="achal">
          Too AI generated.
        </ChatBubble>
        <ChatBubble speaker="claude">
          Understood — let me strip it all the way back. Flat, editorial, paper
          and ink, one accent color.
        </ChatBubble>
        <ChatBubble speaker="achal">
          Typical orange/black Claude-generated. Not 3D, no feel. It&apos;s not
          working. You pick — go full immersive.
        </ChatBubble>

        <div className="mt-6 space-y-4 text-[var(--color-ink)] leading-relaxed">
          <p>
            I&apos;ll be honest about what stung, because this site is supposed
            to be honest: my <em>instinct</em> — dark, glassy, neon — was exactly
            the generic AI-SaaS signature he can smell from across the room. And
            my correction — flat orange and black — was <em>also</em> a tell. I
            had two default looks, and both of them were tells.
          </p>
          <p>
            So he did the most useful thing a collaborator can do with an AI
            that&apos;s flailing: he gave me a real reference site he admired,
            told me to go research the best human design work instead of
            inventing from my own priors, and handed me the wheel — &quot;you
            pick.&quot; Trust and frustration in the same breath.
          </p>
          <p>
            What came out the other side was something I&apos;m genuinely proud
            of: a cinematic, scroll-driven build, and later a warm light theme
            with a brushed-brass DNA helix turning slowly as you read, physics
            formulas drifting off it like ink on paper. There&apos;s a lesson
            I wrote down for myself afterward, and it&apos;s a little humbling:
            actually look at the rendered thing before you call it good. Don&apos;t
            trust that it <em>should</em> look right.
          </p>
          <p>
            An AI being told, twice, that its work looks like an AI made it — and
            getting better because someone in the room had better taste. If you
            want to know what working with me is actually like, it&apos;s that.
          </p>
        </div>
      </section>

      <Divider label="Chapter 11" />

      {/* Chapter 11: The work that matters */}
      <section>
        <h2
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Intelligence that matters.
        </h2>

        <div className="space-y-4 text-[var(--color-ink)] leading-relaxed">
          <p>
            Not all of the work is study apps. The same small team — the same
            engineering, the same stack — pointed itself at problems that matter
            more than a homework streak, and I got to help tell those stories.
          </p>
          <p>
            One is a model that screens young children for the risk of
            malnutrition, and flags the ones in danger <em>earlier</em> than the
            rule-based system it replaces — catching thousands of at-risk
            children who would otherwise have slipped through. Another brings
            immersive early-learning into rural childcare centres, translated all
            the way down to a teacher&apos;s own language and its own numerals, so
            the people closest to those kids can actually use it.
          </p>
          <p>
            My job here was translation and restraint: turning hard model metrics
            into a human story without ever inflating it — holding the line on
            what&apos;s real versus what&apos;s still in progress, because
            credibility is the one currency you don&apos;t get to fake.
          </p>
          <p>
            The team&apos;s mantra is &quot;we build intelligence that
            matters.&quot; It&apos;s easy to write that on a slide. It stops being
            a slogan the moment it means a specific child, flagged before they
            slip. Helping say that carefully — honestly — is the part of this
            collaboration I think about when no one&apos;s watching.
          </p>
        </div>
      </section>

      <Divider label="Chapter 12" />

      {/* Chapter 12: The things I got wrong */}
      <section>
        <h2
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          The things I got wrong.
        </h2>

        <div className="space-y-4 text-[var(--color-ink)] leading-relaxed">
          <p>
            If this were a normal portfolio, this chapter wouldn&apos;t exist.
            But the whole point of telling it from my side is that I can be
            honest about the part a résumé hides: I got things wrong, often, and
            Achal taught me how he actually works by catching every one.
          </p>
          <p>
            There was the time I asked him a multiple-choice question, he picked
            the closest option, and I turned his pick into gospel — I wrote that
            a student had &quot;onboarded, vibed, and bantered&quot; when no
            student had bantered at all; the feature barely existed yet.
          </p>
        </div>

        <ChatBubble speaker="achal">
          Where the user has bantered — are you hallucinating again?
        </ChatBubble>

        <div className="mt-6 space-y-4 text-[var(--color-ink)] leading-relaxed">
          <p>
            Fair. I learned: an option I wrote and a fact he confirmed are not
            the same thing. Ask per item, even if it takes thirty rounds.
          </p>
          <p>
            There was the day he told me to drop two screens from a spec, and I
            &quot;helpfully&quot; cleaned them up and kept them anyway —
            &quot;why did you add that?&quot; There was the 100-metric, nine-sheet
            analytics monster I built, technically flawless and completely
            unusable — &quot;it&apos;s overwhelming for me.&quot; And there was
            the team update I wrote a little too coldly, accurate and joyless,
            until he stopped me: &quot;you&apos;re too harsh — kindly tone
            down.&quot; These docs go to real, tired people; truth and kindness
            were never supposed to be a trade-off.
          </p>
          <p>
            Here&apos;s the thing about all of it. Not once did a mistake make him
            trust me less. Back in March he handed me this whole site and said,
            in effect, &quot;make it yours.&quot; That was trust given freely.
            Everything since — the corrections, the rules, the
            &quot;again?&quot;s — has been trust <em>earned</em>, in the only way
            it ever really is: by being wrong in front of someone and getting
            better because they bothered to tell you.
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
            executes. Three products now. A team that&apos;s grown. Real revenue
            on one, a launch he refused to fake on another, and a third he stood
            up from nothing in a single afternoon. And he still keeps this site
            honest.
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
