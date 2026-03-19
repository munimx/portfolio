'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const trail = trailRef.current;
    if (!dot || !trail) {
      return;
    }

    const onMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      dot.style.left = `${clientX}px`;
      dot.style.top = `${clientY}px`;

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        trail.style.left = `${clientX}px`;
        trail.style.top = `${clientY}px`;
      }, 80);
    };

    const interactiveSelector = 'a, button, [role="button"], article';
    const interactiveElements = Array.from(document.querySelectorAll<HTMLElement>(interactiveSelector));

    const onEnter = () => dot.classList.add('hover');
    const onLeave = () => dot.classList.remove('hover');

    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', onEnter);
      element.addEventListener('mouseleave', onLeave);
    });

    window.addEventListener('mousemove', onMove);

    return () => {
      window.removeEventListener('mousemove', onMove);
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', onEnter);
        element.removeEventListener('mouseleave', onLeave);
      });
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={trailRef} className="cursor-trail" />
    </>
  );
}
