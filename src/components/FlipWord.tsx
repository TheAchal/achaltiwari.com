"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

/* Four words, because a box has four sides. "Products" is the real heading
   text. It ships in the HTML on its own and the other three are added after
   mount, so anything that reads the page without running JS still sees a
   clean "I Ship Real AI Products". Keep the list at four or the cube stops
   lining up, and keep "Products" the longest or the line will reflow. */
const WORDS = ["Products", "Agents", "Tools", "Systems"];

const DWELL = 2400; // how long a word rests before the box turns
const TURN = 780; // length of the turn itself, keep in sync with globals.css

export default function FlipWord() {
  const ref = useRef<HTMLSpanElement>(null);
  const [animate, setAnimate] = useState(false);
  const [step, setStep] = useState(0);
  const [turning, setTurning] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setAnimate(true);

    let dwell = 0;
    let turn = 0;
    let onScreen = true;

    const tick = () => {
      // Step climbs forever so the box always turns the same way, resetting
      // to 0 would spin it backwards through three sides to get home.
      if (onScreen && !document.hidden) {
        setTurning(true);
        setStep((s) => s + 1);
        turn = window.setTimeout(() => setTurning(false), TURN);
      }
      dwell = window.setTimeout(tick, DWELL);
    };
    dwell = window.setTimeout(tick, DWELL);

    // Don't turn the box while the hero is scrolled away.
    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
      },
      { threshold: 0.2 },
    );
    io.observe(el);

    return () => {
      clearTimeout(dwell);
      clearTimeout(turn);
      io.disconnect();
    };
  }, []);

  const faces = animate ? WORDS : WORDS.slice(0, 1);

  return (
    <span className={turning ? "o flipw is-turning" : "o flipw"} ref={ref}>
      <span
        className="flipw__box"
        style={{ "--step": step } as CSSProperties}
      >
        {faces.map((word, i) => (
          <span
            key={word}
            className={i === 0 ? "flipw__face flipw__face--lead" : "flipw__face"}
            style={{ "--i": i } as CSSProperties}
            aria-hidden={i > 0 || undefined}
          >
            {word}
          </span>
        ))}
      </span>
    </span>
  );
}
