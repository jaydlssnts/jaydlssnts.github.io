import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <div className="h-auto flex flex-col gap-5 p-4 bg-white items-center justify-center">
      <div className="h-auto flex flex-row bg-white items-center justify-center">
        <p className="text-black">
          By:{" "}
          <span className="italic font-semibold underline text-blue-500 cursor-pointer">
            &lt;jaydlssnts/&gt;
          </span>
        </p>
      </div>
      <p className="text-black text-xl">Don't Hesitate to contact me!</p>
      <div className="h-auto flex flex-row bg-white items-center justify-center gap-5">
        <a href="https://www.github.com/jaydlssnts" target="_blank">
          <Icon
            icon={"devicon:github"}
            className="text-black text-5xl hover:cursor-pointer"
          ></Icon>
        </a>
        <a
          href="https://www.linkedin.com/in/jay-delos-santos-625876215/"
          target="_blank"
        >
          <Icon
            icon={"devicon:linkedin"}
            className="text-black text-5xl hover:cursor-pointer"
          />
        </a>
      </div>
      <p className="text-black text-xs">All Rights Reserved</p>
    </div>
  );
}
