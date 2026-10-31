import { useEffect, useId, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";

const ScreenshotGallery = ({ name, shots }: { name: string; shots: string[] }) => {
  const [active, setActive] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const titleId = useId();
  const open = active !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setZoomed(false);
        setActive((current) => (current === null ? current : (current + 1) % shots.length));
      }
      if (event.key === "ArrowLeft") {
        setZoomed(false);
        setActive((current) => (current === null ? current : (current - 1 + shots.length) % shots.length));
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, shots.length]);

  const show = (index: number) => {
    setZoomed(false);
    setActive(index);
  };

  const step = (delta: number) => {
    setZoomed(false);
    setActive((current) => (current === null ? current : (current + delta + shots.length) % shots.length));
  };

  return (
    <div className="mt-12">
      <button
        type="button"
        onClick={() => show(0)}
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-card border border-line text-left"
        aria-label={`View ${name} screenshot 1 of ${shots.length}`}
      >
        <img
          src={shots[0]}
          alt={`${name} home page`}
          fetchPriority="high"
          className="aspect-[16/10] w-full object-cover object-top"
        />
        <span className="absolute right-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-ink opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          <ZoomIn size={14} />
          View
        </span>
      </button>

      {shots.length > 1 && (
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {shots.slice(1).map((src, shot) => {
            const index = shot + 1;
            return (
              <button
                key={src}
                type="button"
                onClick={() => show(index)}
                className="group relative cursor-zoom-in overflow-hidden rounded-lg border border-line text-left"
                aria-label={`View ${name} screenshot ${index + 1} of ${shots.length}`}
              >
                <img
                  src={src}
                  alt={`${name} screenshot ${index + 1}`}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>
            );
          })}
        </div>
      )}

      {open && (
        <div
          className="fixed inset-0 z-[80] flex flex-col bg-ink/92 text-white"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
            <p id={titleId} className="text-sm">
              {name}
              <span className="text-white/60">
                {" "}
                · {active + 1} / {shots.length}
              </span>
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setZoomed((value) => !value)}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20"
              >
                {zoomed ? <ZoomOut size={16} /> : <ZoomIn size={16} />}
                {zoomed ? "Fit" : "Zoom"}
              </button>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="grid size-9 place-items-center rounded-full bg-white text-ink"
                aria-label="Close screenshots"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          <div className="relative min-h-0 flex-1">
            <div
              className={`h-full ${zoomed ? "overflow-auto" : "flex items-center justify-center overflow-hidden p-4 sm:p-8"}`}
              onClick={() => setActive(null)}
            >
              <img
                src={shots[active]}
                alt={`${name} screenshot ${active + 1}`}
                onClick={(event) => {
                  event.stopPropagation();
                  setZoomed((value) => !value);
                }}
                className={
                  zoomed
                    ? "mx-auto block w-[min(2200px,180vw)] max-w-none cursor-zoom-out"
                    : "max-h-full max-w-full cursor-zoom-in object-contain"
                }
              />
            </div>

            {shots.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="absolute top-1/2 left-3 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white text-ink sm:left-5"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="absolute top-1/2 right-3 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white text-ink sm:right-5"
                  aria-label="Next screenshot"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScreenshotGallery;
