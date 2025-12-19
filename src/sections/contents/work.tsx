type WorkItem = {
  company: string;
  location: string;
  position: string;
  description: string;
  date: string;
};

export default function Work() {
  const items: WorkItem[] = [
    {
      company: "Cajache Group of Companies",
      location: "Remote",
      position: "Android Developer",
      description:
        "Developed an application called DoodaPH that allows users to book resorts, hotel rooms, and attractions.",
      date: "2022",
    },
    {
      company: "MB Philippines Inc.",
      location: "Pasig City",
      position: "Jr. Developer",
      description:
        "Helped the Clients-Requirements Department by writing, testing, maintaining code, fixing bugs, learning the codebase and etc.",
      date: "2022-2025",
    },
  ];

  return (
    <div id="work" className="max-w-4xl mx-auto px-4 py-12">
      <p className="text-5xl font-bold mb-10">Work Experience</p>

      <div className="space-y-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="border-2 border-green rounded-lg p-6 bg-purple transition"
          >
            <div className="flex items-center justify-between">
              <p className="text-xl font-semibold text-black">
                {item.position}
              </p>

              <span className="text-md text-white bg-red px-2 rounded-2xl">
                {item.date}
              </span>
            </div>

            <p className="text-md font-medium text-black mt-1">
              {item.company}
            </p>

            <p className="text-lg text-black">{item.location}</p>
            <p className="mt-4 text-black leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
