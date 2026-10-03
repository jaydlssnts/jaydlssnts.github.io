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
      className="w-full h-full border-2 border-fg rounded-lg overflow-hidden flex flex-col"
    >
      <div className="flex items-center gap-2 px-4 py-2 bg-bg-light border-b-2 border-fg shrink-0">
        <span className="w-3 h-3 rounded-full bg-green" />
        <span className="w-3 h-3 rounded-full bg-yellow" />
        <span className="w-3 h-3 rounded-full bg-red" />
        <span className="ml-4 text-current-line text-sm font-mono">
          jay@portfolio:~/{title}
        </span>
      </div>
      <div className="p-8 font-mono bg-bg text-fg flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}
