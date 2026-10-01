import type { ReactNode } from "react";

type TerminalWindowProps = {
  id?: string;
  title: string;
  children: ReactNode;
};

export default function TerminalWindow({
  id,
  title,
  children,
}: TerminalWindowProps) {
  return (
    <div
      id={id}
      className="w-full max-w-6xl border-2 border-fg rounded-lg overflow-hidden"
    >
      <div className="flex items-center gap-2 px-4 py-2 bg-bg-light border-b-2 border-fg">
        <span className="w-3 h-3 rounded-full bg-accent" />
        <span className="w-3 h-3 rounded-full bg-fg" />
        <span className="w-3 h-3 rounded-full bg-fg-dim" />
        <span className="ml-4 text-fg-dim text-sm font-mono">
          jay@portfolio:~/{title}
        </span>
      </div>
      <div className="p-8 font-mono bg-gray-600">{children}</div>
    </div>
  );
}
