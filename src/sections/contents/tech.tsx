import { Icon } from "@iconify/react";

export default function Tech() {
  return (
    <div className="w-full font-mono">
      {/* Neofetch-style header */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* ASCII art - J for Jay */}
        <div className="text-fg text-xs leading-tight whitespace-pre shrink-0">
          {/* prettier-ignore-start */}
          {`  ██████╗
     ██║
     ██║
     ██║
  ██ ║
  ╚═══╝`}
          {/* prettier-ignore-end */}
        </div>

        {/* Tech categories as neofetch lines */}
        <div className="flex flex-col gap-4 text-sm">
          <p>
            <span className="text-fg font-bold">Frontend</span>
            <span className="text-fg-dim"> — </span>
            <span className="flex flex-wrap gap-3 text-3xl text-fg">
              <Icon className="hover:scale-125 transition-transform" icon="devicon:html5" />
              <Icon className="hover:scale-125 transition-transform" icon="devicon:css3" />
              <Icon className="hover:scale-125 transition-transform" icon="devicon:javascript" />
              <Icon className="hover:scale-125 transition-transform" icon="devicon:typescript" />
              <Icon className="hover:scale-125 transition-transform" icon="devicon:react" />
              <Icon className="hover:scale-125 transition-transform" icon="devicon:tailwindcss" />
              <Icon className="hover:scale-125 transition-transform" icon="devicon:bootstrap" />
            </span>
          </p>
          <p>
            <span className="text-fg font-bold">Backend</span>
            <span className="text-fg-dim"> — </span>
            <span className="flex flex-wrap gap-3 text-3xl text-fg">
              <Icon className="hover:scale-125 transition-transform" icon="devicon:java" />
              <Icon className="hover:scale-125 transition-transform" icon="devicon:groovy" />
              <Icon className="hover:scale-125 transition-transform" icon="devicon:php" />
              <Icon className="hover:scale-125 transition-transform" icon="devicon:nextjs" />
            </span>
          </p>
          <p>
            <span className="text-fg font-bold">Database</span>
            <span className="text-fg-dim"> — </span>
            <span className="flex flex-wrap gap-3 text-3xl text-fg">
              <Icon className="hover:scale-125 transition-transform" icon="devicon:mysql" />
              <Icon className="hover:scale-125 transition-transform" icon="devicon:postgresql" />
              <Icon className="hover:scale-125 transition-transform" icon="devicon:firebase" />
              <Icon className="hover:scale-125 transition-transform" icon="devicon:mongodb" />
            </span>
          </p>
          <p>
            <span className="text-fg font-bold">Others</span>
            <span className="text-fg-dim"> — </span>
            <span className="flex flex-wrap gap-3 text-3xl text-fg">
              <Icon className="hover:scale-125 transition-transform text-fg" icon="devicon:github" />
              <Icon className="hover:scale-125 transition-transform" icon="devicon:docker" />
              <Icon className="hover:scale-125 transition-transform" icon="devicon:linux" />
              <Icon className="hover:scale-125 transition-transform" icon="devicon:photoshop" />
              <Icon className="hover:scale-125 transition-transform" icon="devicon:illustrator" />
            </span>
          </p>
          <div className="flex gap-1 mt-2">
            <span className="w-4 h-4 bg-bg" />
            <span className="w-4 h-4 bg-bg-light" />
            <span className="w-4 h-4 bg-fg" />
            <span className="w-4 h-4 bg-fg-dim" />
            <span className="w-4 h-4 bg-accent" />
            <span className="w-4 h-4 bg-cursor" />
          </div>
        </div>
      </div>
    </div>
  );
}
