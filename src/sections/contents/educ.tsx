import { Icon } from "@iconify/react";

export default function Educ() {
  return (
    <div className="w-full">
      <div className="gap-15 space-y-6 flex flex-row border-2 border-fg bg-surface rounded-lg p-6">
        <Icon
          icon={"tabler:school"}
          width={150}
          height={150}
          className="text-fg"
        />
        <div className="flex flex-col gap-3">
          <div className="flex flex-row items-center gap-2">
            <Icon icon={"tabler:building-bank"} className="text-4xl text-fg" />
            <p className="text-2xl text-fg">
              Techonological Institute of the Philippines{" "}
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Icon icon={"tabler:map-pin"} className="text-4xl text-fg-dim" />
            <p className="text-fg-dim">Quezon City</p>
          </div>
          <div className="flex flex-col">
            <p className="text-fg">
              Bachelor's Degree in Bachelor of Science in Information Technology
            </p>
            <p className="text-fg-dim">2018-2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}
