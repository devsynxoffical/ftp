import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive elements
      const target = e.target;
      const isInteractive = target.closest('button, a, input, select, textarea, [role="button"], .interactive-hover');
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Smooth spring lerp for trailing glow
  useEffect(() => {
    let animationFrameId;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const follow = () => {
      setTrailingPos((prev) => ({
        x: lerp(prev.x, position.x, 0.18),
        y: lerp(prev.y, position.y, 0.18),
      }));
      animationFrameId = requestAnimationFrame(follow);
    };

    animationFrameId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small Central Dot */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#38bdf8',
          boxShadow: '0 0 10px #38bdf8',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
          transition: 'transform 0.05s linear',
        }}
      />

      {/* Trailing Soft Violet Glow Ring */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? '48px' : '32px',
          height: isHovered ? '48px' : '32px',
          borderRadius: '50%',
          border: isHovered ? '1.5px solid #a78bfa' : '1px solid rgba(167, 139, 250, 0.45)',
          background: isHovered ? 'rgba(124, 58, 237, 0.15)' : 'rgba(124, 58, 237, 0.04)',
          boxShadow: isHovered ? '0 0 20px rgba(167, 139, 250, 0.4)' : 'none',
          pointerEvents: 'none',
          zIndex: 99998,
          transform: `translate3d(${trailingPos.x - (isHovered ? 24 : 16)}px, ${trailingPos.y - (isHovered ? 24 : 16)}px, 0)`,
          transition: 'width 0.25s ease, height 0.25s ease, background 0.25s ease, border 0.25s ease',
        }}
      />
    </>
  );
}
