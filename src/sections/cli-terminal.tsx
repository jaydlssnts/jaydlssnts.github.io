import { useEffect, useRef, useState, type ReactNode } from "react";
import Typed from "typed.js";
import Work from "./contents/work";
import Proj from "./contents/proj";
import Tech from "./contents/tech";
import Other from "./contents/other";
import TerminalWindow from "./terminal-window";

type SectionKey =
  | "home"
  | "work"
  | "projects"
  | "skills"
  | "about"
  | "clear"
  | "help";

const COMMANDS: { key: SectionKey; label: string; description: string }[] = [
  { key: "home", label: "home", description: "home" },
  { key: "work", label: "work", description: "Work experience" },
  { key: "projects", label: "projects", description: "Personal projects" },
  { key: "skills", label: "skills", description: "Tech & skills" },
  { key: "about", label: "about", description: "About me" },
  { key: "clear", label: "clear", description: "Clear terminal" },
  { key: "help", label: "help", description: "Show available commands" },
];

const BOOT_LINES = [
  "Initializing NERV terminal...",
  "Loading system modules...",
  "MAGI system online...",
  "Terminal ready. Type 'help' for available commands.",
];

function TypingOutput({
  children,
  commandKey,
}: {
  children: ReactNode;
  commandKey: string;
}) {
  return (
    <div key={commandKey} className="animate-fade-in">
      {children}
    </div>
  );
}

function BootSequence({ onComplete }: { onComplete: () => void }) {
  const bootRef = useRef<HTMLDivElement>(null);
  const typedRef = useRef<Typed | null>(null);

  useEffect(() => {
    if (!bootRef.current) return;

    typedRef.current = new Typed(bootRef.current, {
      strings: BOOT_LINES.map(
        (line) => `<span class="text-fg">&gt; ${line}</span>`,
      ),
      typeSpeed: 30,
      backSpeed: 0,
      loop: false,
      showCursor: true,
      cursorChar: "█",
      contentType: "html",
      onComplete: () => {
        const cursor = bootRef.current
          ?.nextElementSibling as HTMLElement | null;
        if (cursor) cursor.style.display = "none";
        setTimeout(onComplete, 500);
      },
    });

    return () => {
      typedRef.current?.destroy();
    };
  }, [onComplete]);

  return <div ref={bootRef} className="text-fg text-sm" />;
}

export default function CLITerminal() {
  const [booted, setBooted] = useState(false);
  const [activeCommand, setActiveCommand] = useState<SectionKey | null>(null);
  const [commandOutput, setCommandOutput] = useState<ReactNode>(null);

  const handleCommand = (cmd: SectionKey) => {
    setActiveCommand(cmd);

    if (cmd === "clear") {
      setCommandOutput(null);
      setActiveCommand(null);
      return;
    }

    if (cmd === "help") {
      setCommandOutput(
        <div className="space-y-2 text-sm">
          <p className="text-accent font-bold">Available commands:</p>
          {COMMANDS.filter((c) => c.key !== "help" && c.key !== "clear").map(
            (c) => (
              <div key={c.key} className="flex gap-4">
                <span className="text-fg font-bold min-w-25">{c.label}</span>
                <span className="text-fg-dim">{c.description}</span>
              </div>
            ),
          )}
          <p className="text-fg-dim mt-4">
            Click a command button below or type to navigate.
          </p>
        </div>,
      );
      return;
    }

    if (cmd === "work") {
      setCommandOutput(<Work />);
      return;
    }

    if (cmd === "projects") {
      setCommandOutput(<Proj />);
      return;
    }

    if (cmd === "skills") {
      setCommandOutput(<Tech />);
      return;
    }

    if (cmd === "about") {
      setCommandOutput(<Other />);
      return;
    }
  };

  return (
    <TerminalWindow id="cli" title="portfolio">
      <div className="space-y-6">
        {/* Boot sequence */}
        {!booted && <BootSequence onComplete={() => setBooted(true)} />}

        {/* Command output */}
        {booted && activeCommand && activeCommand !== "clear" && (
          <TypingOutput commandKey={activeCommand}>
            <div className="mb-4">
              <span className="text-fg-dim">:</span>
              <span className="text-fg">~/{activeCommand}</span>
              <span className="text-fg-dim">$ </span>
              <span className="text-fg">{activeCommand}</span>
            </div>
            <div className="mt-4">{commandOutput}</div>
          </TypingOutput>
        )}

        {/* Welcome message after boot */}
        {booted && !activeCommand && (
          <div className="text-fg text-sm">
            <p className="text-accent font-bold mb-2">
              Welcome to Jay's Portfolio Terminal!
            </p>
            <p className="text-fg-dim">
              Click a command below or type to explore.
            </p>
          </div>
        )}
      </div>
    </TerminalWindow>
  );
}
