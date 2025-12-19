import { Icon } from "@iconify/react";

type Project = {
  name: string;
  description: string;
  techStack: string[]; // iconify icon names
};

export default function Proj() {
  const projects: Project[] = [
    {
      name: "Kimventory",
      description:
        "A simple POS system that records transactions for a small eLoading business by my girlfriend",
      techStack: ["devicon:react", "devicon:nextjs", "devicon:postgresql"],
    },
  ];

  return (
    <div id="proj" className="w-[70%] mx-auto py-16 flex flex-col gap-10">
      <p className="text-5xl font-bold text-center">Personal Projects</p>

      {/* Projects List */}
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-green rounded-2xl p-8 shadow-sm hover:shadow-md transition"
          >
            {/* Project Title */}
            <p className="text-2xl text-white font-semibold mb-4">
              {project.name}
            </p>

            {/* Description */}
            <p className="text-lg text-white leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-medium text-white">Tech Stack:</span>

              {project.techStack.map((icon, i) => (
                <Icon
                  key={i}
                  icon={icon}
                  className="text-3xl hover:cursor-pointer hover:scale-150 transition-transform"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
