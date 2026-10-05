import { Icon } from "@iconify/react";
type Item = {
  name: string;
  icon: string;
};

type Stack = {
  category: string;
  items: Item[];
};

const stacks: Stack[] = [
  {
    category: "Frontend",
    items: [
      { name: "html", icon: "devicon:html5" },
      { name: "css", icon: "devicon:css3" },
      { name: "javascript", icon: "devicon:javascript" },
      { name: "typescript", icon: "devicon:typescript" },
      { name: "react", icon: "devicon:react" },
      { name: "tailwindcss", icon: "devicon:tailwindcss" },
      { name: "bootstrap", icon: "devicon:bootstrap" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "java", icon: "devicon:java" },
      { name: "groovy", icon: "devicon:groovy" },
      { name: "php", icon: "devicon:php" },
      { name: "nextjs", icon: "devicon:nextjs" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "mysql", icon: "devicon:mysql" },
      { name: "postgresql", icon: "devicon:postgresql" },
      { name: "firebase", icon: "devicon:firebase" },
      { name: "mongodb", icon: "devicon:mongodb" },
    ],
  },
  {
    category: "Others",
    items: [
      { name: "github", icon: "devicon:github" },
      { name: "githubActions", icon: "devicon:githubactions" },
      { name: "docker", icon: "devicon:docker" },
      { name: "linux", icon: "devicon:linux" },
      { name: "photoshop", icon: "devicon:photoshop" },
      { name: "illustrator", icon: "devicon:illustrator" },
    ],
  },
];

export default function Tech() {
  return (
    <div className="w-full font-mono">
      {/* Neofetch-style header */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* ASCII art - J for Jay */}
        <div className="text-fg text-xs leading-tight whitespace-pre shrink-0"></div>

        {/* Tech categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {stacks.map((stack) => (
            <div
              key={stack.category}
              className="border-2 border-fg rounded-lg p-4 bg-surface"
            >
              <h3 className="text-fg font-bold text-lg mb-3">
                {stack.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {stack.items.map((item) => (
                  <Icon
                    key={item.name}
                    className="hover:scale-125 transition-transform text-4xl text-fg"
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
