import { Icon } from "@iconify/react";

type Project = {
  name: string;
  description: string;
  techStack: string[];
  images: string[];
};

export default function Proj() {
  const projects: Project[] = [
    {
      name: "Flutter/React Blogs",
      description:
        "A mobile application I created while learning flutter, also a website that is built using Nextjs",
      techStack: [
        "devicon:flutter",
        "devicon:nextjs",
        "devicon:supabase",
        "devicon:postgresql",
      ],
      images: ["flutter1.png", "flutter2.png", "flutter3.png"],
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {project.images.map((url, i) => (
                <img
                  src={url}
                  key={i}
                  alt={url}
                  className="w-full h-auto rounded-lg object-cover"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
