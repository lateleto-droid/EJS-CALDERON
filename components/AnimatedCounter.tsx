'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView, motion } from 'motion/react';

interface AnimatedCounterProps {
  endValue: number;
  suffix?: string;
  duration?: number;
  decimals?: number;
}

export default function AnimatedCounter({ endValue, suffix = '', duration = 2000, decimals = 0 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration) {
        const currentVal = (endValue * progress) / duration;
        setCount(currentVal);
        requestAnimationFrame(animateCount);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, endValue, duration]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}{suffix}
    </span>
  );
}
