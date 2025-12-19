import { Icon } from "@iconify/react";

export default function Tech() {
  return (
    <div id="tech" className="max-w-4xl mx-auto px-4 py-12">
      <p className="text-5xl font-bold mb-10">Technologies & Skills</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border-2 border-purple rounded-xl p-6 bg-orange shadow-sm hover:shadow-md transition">
          <p className="text-xl font-semibold mb-4">Frontend</p>
          <div className="flex flex-wrap gap-4 text-3xl text-gray-700">
            <Icon className="tech-icon" icon="devicon:html5" />
            <Icon className="tech-icon" icon="devicon:css3" />
            <Icon className="tech-icon" icon="devicon:javascript" />
            <Icon className="tech-icon" icon="devicon:typescript" />
            <Icon className="tech-icon" icon="devicon:react" />
            <Icon className="tech-icon" icon="devicon:tailwindcss" />
            <Icon className="tech-icon" icon="devicon:bootstrap" />
          </div>
        </div>

        <div className="border-2 border-purple rounded-xl p-6 bg-orange shadow-sm hover:shadow-md transition">
          <p className="text-xl font-semibold mb-4">Backend</p>
          <div className="flex flex-wrap gap-4 text-3xl text-gray-700">
            <Icon className="tech-icon" icon="devicon:java" />
            <Icon className="tech-icon" icon="devicon:groovy" />
            <Icon className="tech-icon" icon="devicon:php" />
            <Icon className="tech-icon" icon="devicon:nextjs" />
          </div>
        </div>

        <div className="border-2 border-purple rounded-xl p-6 bg-orange shadow-sm hover:shadow-md transition">
          <p className="text-xl font-semibold mb-4">Database</p>
          <div className="flex flex-wrap gap-4 text-3xl text-gray-700">
            <Icon className="tech-icon" icon="devicon:mysql" />
            <Icon className="tech-icon" icon="devicon:postgresql" />
            <Icon className="tech-icon" icon="devicon:firebase" />
            <Icon className="tech-icon" icon="devicon:androidstudio" />
          </div>
        </div>

        <div className="border-2 border-purple rounded-xl p-6 bg-orange shadow-sm hover:shadow-md transition">
          <p className="text-xl font-semibold mb-4">Others</p>
          <div className="flex flex-wrap gap-4 text-3xl text-gray-700">
            <Icon className="tech-icon" icon="devicon:github" />
            <Icon className="tech-icon" icon="devicon:docker" />
            <Icon className="tech-icon" icon="devicon:linux" />
            <Icon className="tech-icon" icon="devicon:photoshop" />
            <Icon className="tech-icon" icon="devicon:illustrator" />
          </div>
        </div>
      </div>
    </div>
  );
}
