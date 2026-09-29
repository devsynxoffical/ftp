import React, { useEffect, useState, useRef } from 'react';

export default function AnimatedCounter({ value, duration = 1800, className, style }) {
  const [displayValue, setDisplayValue] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount();
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, value]);

  const animateCount = () => {
    // Extract numerical value and prefixes/suffixes
    // Examples: '500+' -> prefix='', target=500, suffix='+'
    // '$50M+' -> prefix='$', target=50, suffix='M+'
    // '89%' -> prefix='', target=89, suffix='%'
    // '4.8x' -> prefix='', target=4.8, suffix='x'
    // '5–10d' -> special non-single number, animate with subtle glitch/reveal
    const match = value.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);

    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1] || '';
    const targetNumber = parseFloat(match[2]);
    const suffix = match[3] || '';
    const isDecimal = match[2].includes('.');

    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic formula
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      const current = targetNumber * easeProgress;
      const formatted = isDecimal ? current.toFixed(1) : Math.floor(current);

      setDisplayValue(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  return (
    <span ref={elementRef} className={className} style={style}>
      {displayValue}
    </span>
  );
}
