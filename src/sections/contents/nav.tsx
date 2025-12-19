import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`flex flex-row justify-end-safe text-center gap-8 rounded-2xl 
        sticky top-0 z-50 transition-all duration-300 m-12 border-white border
        ${
          scrolled
            ? "bg-purple/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
    >
      <a
        className="text-green hover:bg-green hover:text-red text-xl p-3 w-full rounded-2xl transition"
        href="#educ"
      >
        Educational Background
      </a>
      <a
        className="text-green hover:bg-green hover:text-red text-xl p-3 w-full rounded-2xl transition"
        href="#work"
      >
        Working Experience
      </a>
      <a
        className="text-green hover:bg-green hover:text-red text-xl p-3 w-full rounded-2xl transition"
        href="#proj"
      >
        Personal Projects
      </a>
      <a
        className="text-green hover:bg-green hover:text-red text-xl p-3 w-full rounded-2xl transition"
        href="#tech"
      >
        Tech & Skills
      </a>
      <a
        className="text-green hover:bg-green hover:text-red text-xl p-3 w-full rounded-2xl transition"
        href="#other"
      >
        Others
      </a>
    </div>
  );
}
