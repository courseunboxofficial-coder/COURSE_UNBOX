"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function CountUp({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
}: CountUpProps) {
  const [count, setCount] = useState(0);
  //pointing the target span
  const ref = useRef<HTMLSpanElement | null>(null);

  //for checking if target animation already start (for persistent)
  const started = useRef(false);

  useEffect(() => {
    //if element not mounted yet, then exist
    if (!ref.current) return;

    //IntersectionObserver
    

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animate();
        }
      },
    //   When target 50% of it is visible
      { threshold: 0.5 }
    );
    //Browser now tracks that element.
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const animate = () => {
    //Local variable (not state) ,represents current animated value
    let start = 0;

    // Browser runs ~60 frames/sec

    // 1 frame ≈ 16ms

    // How much should number increase per frame
    const increment = end / (duration / 16);

    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        //Ask browser for next animation frame
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    //Start animation
    requestAnimationFrame(step);
  };

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}
