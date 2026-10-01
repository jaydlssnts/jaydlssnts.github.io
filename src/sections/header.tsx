import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

export default function Header() {
  const nameRef = useRef<HTMLSpanElement>(null);
  const traitsRef = useRef<HTMLSpanElement>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [booted, setBooted] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const nameTypedRef = useRef<Typed | null>(null);
  const traitsTypedRef = useRef<Typed | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !booted) {
          setBooted(true);
          let progress = 0;
          const interval = setInterval(() => {
            progress += Math.random() * 15 + 5;
            if (progress >= 100) {
              progress = 100;
              clearInterval(interval);
              setTimeout(() => {
                if (!nameRef.current) return;
                nameTypedRef.current = new Typed(nameRef.current, {
                  strings: ["Jay Delos Santos"],
                  typeSpeed: 80,
                  backSpeed: 40,
                  loop: false,
                  showCursor: true,
                  cursorChar: "█",
                  onComplete: () => {
                    setIsFinished(true);
                    const cursor = nameRef.current
                      ?.nextElementSibling as HTMLElement | null;
                    if (cursor) cursor.style.display = "none";
                    if (!traitsRef.current) return;
                    traitsTypedRef.current = new Typed(traitsRef.current, {
                      strings: [
                        "full stack developer",
                        "detail oriented",
                        "goal driven",
                        "collaborative",
                      ],
                      typeSpeed: 50,
                      backSpeed: 30,
                      loop: true,
                      backDelay: 1500,
                      showCursor: true,
                      cursorChar: "█",
                    });
                  },
                });
              }, 400);
            }
            setLoadingProgress(progress);
          }, 100);
        }
      },
      { threshold: 0.3 },
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => {
      observer.disconnect();
      nameTypedRef.current?.destroy();
      traitsTypedRef.current?.destroy();
    };
  }, [booted]);

  return (
    <>
      <div
        ref={headerRef}
        className="h-screen flex flex-col items-center justify-center px-4 py-12"
      >
        {/* Terminal window chrome */}
        <div className="w-full max-w-6xl border-2 border-fg rounded-lg overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2 bg-bg-light border-b-2 border-fg">
            <span className="w-3 h-3 rounded-full bg-accent" />
            <span className="w-3 h-3 rounded-full bg-fg" />
            <span className="w-3 h-3 rounded-full bg-fg-dim" />
            <span className="ml-4 text-fg-dim text-sm font-mono">
              jay@portfolio:~
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-8 font-mono min-h-50 flex flex-col justify-center">
            {loadingProgress < 100 ? (
              <div className="text-fg text-lg">
                <p className="mb-2">
                  <span className="text-accent">&gt; </span>
                  Initializing NERV terminal...
                </p>
                <div className="w-full bg-bg-light border border-fg rounded h-4 overflow-hidden">
                  <div
                    className="h-full bg-fg transition-all duration-100"
                    style={{ width: `${loadingProgress}%` }}
                  />
                </div>
                <p className="mt-2 text-fg-dim text-sm">
                  {loadingProgress < 100
                    ? `Loading system modules... ${Math.floor(loadingProgress)}%`
                    : "System ready."}
                </p>
              </div>
            ) : (
              <>
                <p className="text-4xl md:text-6xl font-bold text-fg mb-4">
                  <span className="text-accent">$ </span>
                  echo <span className="text-cursor">"</span>
                  <span ref={nameRef} />
                  <span className="text-cursor">"</span>
                </p>

                <p className="text-xl md:text-2xl text-fg-dim">
                  <span className="text-accent">$ </span>
                  whoami
                  <span className={isFinished ? "text-accent" : "text-fg-dim"}>
                    {" > "}
                  </span>
                  <span ref={traitsRef} />
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
