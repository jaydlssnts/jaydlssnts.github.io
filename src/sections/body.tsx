import { useEffect, useRef, useState, type ReactNode } from "react";
import Typed from "typed.js";
import Work from "./contents/work";
import Proj from "./contents/proj";
import Tech from "./contents/tech";
import Other from "./contents/other";
import TerminalWindow from "./terminal-window";

type SectionKey = "home" | "work" | "projects" | "skills" | "about";

const COMMANDS: { key: SectionKey; label: string; description: string }[] = [
  { key: "home", label: "home", description: "Profile info" },
  { key: "work", label: "work", description: "Work experience" },
  { key: "projects", label: "projects", description: "Personal projects" },
  { key: "skills", label: "skills", description: "Tech & skills" },
  { key: "about", label: "about", description: "About me" },
];

function TypingOutput({
  children,
  commandKey,
  introText,
}: {
  children: ReactNode;
  commandKey: string;
  introText: string;
}) {
  const introRef = useRef<HTMLSpanElement>(null);
  const typedRef = useRef<Typed | null>(null);
  const [showContent, setShowContent] = useState(false);

  const key = `${commandKey}-${introText}`;

  useEffect(() => {
    if (!introRef.current) return;
    typedRef.current = new Typed(introRef.current, {
      strings: [introText],
      typeSpeed: 30,
      backSpeed: 0,
      loop: false,
      showCursor: true,
      cursorChar: "█",
      onComplete: () => {
        const cursor = introRef.current
          ?.nextElementSibling as HTMLElement | null;
        if (cursor) cursor.style.display = "none";
        setTimeout(() => setShowContent(true), 200);
      },
    });
    return () => {
      typedRef.current?.destroy();
    };
  }, [key]);

  return (
    <div key={key}>
      <p className="text-fg mb-4">
        <span ref={introRef} />
      </p>
      <div
        className={`transition-opacity duration-300 ${showContent ? "opacity-100" : "opacity-0"}`}
      >
        {children}
      </div>
    </div>
  );
}

function HomeContent() {
  return (
    <div className="text-fg text-sm font-mono whitespace-pre-wrap leading-relaxed">
      {`Name:     Jay Delos Santos
Title:    Full Stack Developer
Email:    jayds260@gmail.com
Course:   BS Information Technology
GitHub:   github.com/jaydlssnts
LinkedIn: linkedin.com/in/jaydlssnts`}
    </div>
  );
}

export default function Body() {
  const [introDone, setIntroDone] = useState(false);
  const [activeTab, setActiveTab] = useState<SectionKey | null>(null);

  const handleCommand = (cmd: SectionKey) => {
    setIntroDone(true);
    setActiveTab(cmd);
  };

  const renderContent = (): ReactNode => {
    if (activeTab === "home") return <HomeContent />;
    if (activeTab === "work") return <Work />;
    if (activeTab === "projects") return <Proj />;
    if (activeTab === "skills") return <Tech />;
    if (activeTab === "about") return <Other />;
    return null;
  };

  return (
    <div className="w-full h-screen flex items-center justify-center p-[5%]">
      <TerminalWindow id="cli" title="portfolio">
        <div className="flex flex-col h-full">
          {/* Scrollable content area */}
          <div className="flex-1 overflow-auto space-y-6 pb-4">
            {activeTab && (
              <TypingOutput
                key={activeTab}
                commandKey={activeTab}
                introText={`cat ~/.${activeTab}`}
              >
                <div className="mt-4">{renderContent()}</div>
              </TypingOutput>
            )}
          </div>

          {/* Command bar — pinned at bottom */}
          {introDone && (
            <div className="shrink-0 border-t-2 border-fg pt-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-surface border border-fg rounded">
                <span className="text-green font-bold"></span>
                <div className="flex flex-wrap gap-2 flex-1 ml-2">
                  {COMMANDS.map((cmd) => (
                    <button
                      key={cmd.key}
                      onClick={() => handleCommand(cmd.key)}
                      className={`px-3 py-1 rounded font-mono text-xs transition-all border ${
                        activeTab === cmd.key
                          ? "bg-fg text-bg border-fg font-bold"
                          : "bg-transparent text-fg border-fg-dim hover:border-fg hover:text-accent"
                      }`}
                    >
                      {cmd.label}
                    </button>
                  ))}
                </div>
                <span className="w-2 h-5 bg-fg animate-pulse ml-2" />
              </div>
            </div>
          )}
        </div>
      </TerminalWindow>
    </div>
  );
}
