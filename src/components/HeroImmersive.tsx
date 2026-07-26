"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import FlipWord from "./FlipWord";

export default function HeroImmersive() {
  const pinRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const bg = bgRef.current;
    const pin = pinRef.current;
    if (!hero || !bg || !pin) return;

    // Respect reduced-motion: no parallax/zoom
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let px = 0,
      py = 0,
      rx = 0,
      ry = 0,
      zoom = 1.08;
    let raf = 0;

    const apply = () => {
      raf = 0;
      bg.style.setProperty("--px", px.toFixed(2));
      bg.style.setProperty("--py", py.toFixed(2));
      bg.style.setProperty("--rx", rx.toFixed(2));
      bg.style.setProperty("--ry", ry.toFixed(2));
      bg.style.setProperty("--zoom", zoom.toFixed(3));
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };

    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5; // -0.5 … 0.5
      const ny = (e.clientY - r.top) / r.height - 0.5;
      px = nx * -22; // translate (px)
      py = ny * -22;
      rx = nx * 4.5; // rotateY (deg)
      ry = ny * -4.5; // rotateX (deg)
      schedule();
    };
    const onLeave = () => {
      px = py = rx = ry = 0;
      schedule();
    };
    const onScroll = () => {
      // Progress over the whole tall pin wrap → slow, gradual zoom while pinned
      const r = pin.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const prog = total > 0 ? Math.min(Math.max(-r.top / total, 0), 1) : 0;
      zoom = 1.08 + prog * 0.26; // zoom in gradually across the pin
      schedule();
    };

    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    apply();

    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hero-pin" ref={pinRef}>
    <section className="hero" ref={heroRef}>
      {/* Full-bleed photo background — parallax + scroll zoom */}
      <div className="hero__bg hero__bg--3d" ref={bgRef}>
        <Image src="/images/hero.png" alt="" fill priority sizes="100vw" />
      </div>

      {/* Services + CTA — top-right */}
      <div className="hero__scope">
        <ul>
          <li>AI Product Management</li>
          <li>0→1 Product Building</li>
          <li>Growth &amp; Monetization</li>
        </ul>
        <Link href="/contact" className="hero__cta">
          <span>How can I help?</span>
          <span className="arrow" aria-hidden>
            ↗
          </span>
        </Link>
      </div>

      {/* Lead block — greeting · name · giant title · scroll (bottom-left) */}
      <div className="hero__lead">
        <p className="eyebrow hero__greeting">Hey, this is</p>
        <p className="hero__name">
          Achal <span>Tiwari</span>
        </p>
        <h1 className="hero__title">
          <span>I Ship</span>
          <span>Real AI</span>
          <FlipWord />
        </h1>
        <span className="hero__scroll eyebrow">(Scroll down)</span>
      </div>

      {/* Bio — bottom-right */}
      <p className="hero__intro">
        Product Manager at Infinity Learn. I take ideas from zero to shipped and
        build AI products people actually use. Past 10,000 users, profitable in
        five weeks.
      </p>
    </section>
    </div>
  );
}
