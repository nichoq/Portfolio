import { useLayoutEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';

export default function SplitText({
  text = '',
  tag = 'p',
  className = '',
  highlightText = '',
  highlightClassName = '',
  delay = 45,
  duration = 0.75,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 34 },
  to = { opacity: 1, y: 0 },
  textAlign = 'center',
  onLetterAnimationComplete,
}) {
  const ref = useRef(null);
  const hasAnimatedRef = useRef(false);
  const Tag = tag;
  const initialTransform = [
    from.y !== undefined ? `translateY(${from.y}px)` : '',
    from.rotateX !== undefined ? `rotateX(${from.rotateX}deg)` : '',
  ].filter(Boolean).join(' ');

  const parts = useMemo(() => {
    if (splitType === 'words') {
      return text.split(/(\s+)/).map((part, index) => ({
        value: part,
        key: `${part}-${index}`,
        isSpace: /^\s+$/.test(part),
        isHighlighted: highlightText && part === highlightText,
      }));
    }

    return Array.from(text).map((part, index) => ({
      value: part,
      key: `${part}-${index}`,
      isSpace: part === ' ',
      isHighlighted: false,
    }));
  }, [highlightText, splitType, text]);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element || hasAnimatedRef.current) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = element.querySelectorAll('[data-split-item]');

    if (reduceMotion || targets.length === 0) {
      gsap.set(targets, { opacity: 1, y: 0 });
      hasAnimatedRef.current = true;
      onLetterAnimationComplete?.();
      return undefined;
    }

    const animation = gsap.fromTo(
      targets,
      from,
      {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        onComplete: () => {
          hasAnimatedRef.current = true;
          onLetterAnimationComplete?.();
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, [delay, duration, ease, from, onLetterAnimationComplete, to]);

  return (
    <Tag
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        display: 'inline-block',
        overflow: 'hidden',
        textAlign,
        whiteSpace: 'normal',
        wordWrap: 'break-word',
      }}
    >
      {parts.map((part) =>
        part.isSpace ? (
          <span key={part.key} aria-hidden="true">
            {' '}
          </span>
        ) : (
          <span
            key={part.key}
            data-split-item
            className={`split-item ${part.isHighlighted ? highlightClassName : ''}`}
            style={{
              opacity: from.opacity ?? 0,
              transform: initialTransform || undefined,
            }}
            aria-hidden="true"
          >
            {part.value}
          </span>
        )
      )}
      <span className="sr-only">{text}</span>
    </Tag>
  );
}
