import { useLayoutEffect, useRef } from "react";

interface FitTextProps {
  text: string;
  as?: "h1" | "p";
  className?: string;
  ariaHidden?: boolean;
}

// Scales a single line of text so it spans the full width of its parent.
const FitText = ({ text, as: Tag = "p", className = "", ariaHidden }: FitTextProps) => {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    const fit = () => {
      el.style.fontSize = "100px";
      const ratio = parent.clientWidth / el.scrollWidth;
      el.style.fontSize = `${Math.floor(100 * ratio * 0.995)}px`;
    };

    fit();
    document.fonts?.ready.then(fit);
    const ro = new ResizeObserver(fit);
    ro.observe(parent);
    return () => ro.disconnect();
  }, [text]);

  return (
    <Tag
      ref={ref as never}
      aria-hidden={ariaHidden}
      className={`display inline-block whitespace-nowrap font-medium leading-[0.9] ${className}`}
    >
      {text}
    </Tag>
  );
};

export default FitText;
