import { Icon } from "@iconify/react";

type WorkItem = {
  company: string;
  location: string;
  position: string;
  description: string;
  images: string[];
  date: string;
};

export default function Work() {
  const items: WorkItem[] = [
    {
      company: "Digital One Solutions Inc",
      location: "Makati",
      position: "Full Stack Developer",
      description:
        "Assigned to create a HRIS System with the features like Monitor Employees Attendance, Leave Applications, Performance Evaluations, etc.",
      images: ["hris.png"],
      date: "May 2026 - Present",
    },
    {
      company: "MB Philippines Inc.",
      location: "Pasig",
      position: "Jr. Developer",
      description:
        "Helped the Clients-Requirements Department by writing, testing, maintaining code, fixing bugs, learning the codebase and etc.",
      images: [],
      date: "April 2022 - June 2025",
    },
    {
      company: "Cajache Group of Companies",
      location: "Remote",
      position: "Android Developer",
      description:
        "Developed an application called DoodaPH that allows users to book resorts, hotel rooms, and attractions.",
      images: [],
      date: "2022",
    },
  ];

  return (
    <div className="w-full space-y-6">
      {items.map((item, index) => (
          <div
            key={index}
            className="border-2 border-fg rounded-lg p-6 bg-gray-600 transition"
          >
            <div className="flex items-center justify-between">
              <p className="text-xl font-semibold text-fg">{item.position}</p>

              <span className="text-md text-bg bg-accent px-2 rounded-2xl">
                {item.date}
              </span>
            </div>

            <p className="text-md font-medium text-fg mt-1">{item.company}</p>

            <div className="flex flex-row items-center">
              <Icon icon="tabler:map-pin" className="text-2xl" />
              <p className="text-lg text-fg-dim">{item.location}</p>
            </div>
            <p className="mt-4 text-fg-dim leading-relaxed">
              {item.description}
            </p>
            <div>
              {item.images.map((url, i) => (
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
  );
}
