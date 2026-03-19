'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const trailPosRef = useRef({ x: 0, y: 0 });
  const initializedRef = useRef(false);

  useEffect(() => {
    const dot = dotRef.current;
    const trail = trailRef.current;
    if (!dot || !trail) {
      return;
    }

    const animateTrail = () => {
      const target = targetRef.current;
      const trailPos = trailPosRef.current;
      trailPos.x += (target.x - trailPos.x) * 0.16;
      trailPos.y += (target.y - trailPos.y) * 0.16;
      trail.style.left = `${trailPos.x}px`;
      trail.style.top = `${trailPos.y}px`;
      rafRef.current = window.requestAnimationFrame(animateTrail);
    };

    const onMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      targetRef.current = { x: clientX, y: clientY };
      dot.style.left = `${clientX}px`;
      dot.style.top = `${clientY}px`;
      if (!initializedRef.current) {
        trailPosRef.current = { x: clientX, y: clientY };
        trail.style.left = `${clientX}px`;
        trail.style.top = `${clientY}px`;
        initializedRef.current = true;
      }
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
    rafRef.current = window.requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', onMove);
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', onEnter);
        element.removeEventListener('mouseleave', onLeave);
      });
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
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
