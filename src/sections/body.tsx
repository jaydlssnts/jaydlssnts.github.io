import Educ from "./contents/educ";
import Other from "./contents/other";
import Proj from "./contents/proj";
import Tech from "./contents/tech";
import Work from "./contents/work";
import TerminalWindow from "./terminal-window";

export default function Body() {
  return (
    <div className="flex flex-col gap-12 w-full items-center px-4 py-12">
      <TerminalWindow id="educ" title="education">
        <Educ />
      </TerminalWindow>

      <TerminalWindow id="work" title="work">
        <Work />
      </TerminalWindow>

      <TerminalWindow id="proj" title="projects">
        <Proj />
      </TerminalWindow>

      <TerminalWindow id="tech" title="skills">
        <Tech />
      </TerminalWindow>

      <TerminalWindow id="other" title="about">
        <Other />
      </TerminalWindow>
    </div>
  );
}
