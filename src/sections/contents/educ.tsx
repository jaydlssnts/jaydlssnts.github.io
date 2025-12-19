import { Icon } from "@iconify/react";

export default function Educ() {
  return (
    <div id="educ" className="max-w-4xl mx-auto px-4 py-12">
      <p className="text-5xl font-bold mb-10 ">Educational Background</p>
      <div className="gap-15 space-y-6 flex flex-row border-2 bg-green border-white rounded-lg p-6">
        <Icon
          icon={"tabler:school"}
          width={150}
          height={150}
          className="text-purple"
        />
        <div className="flex flex-col gap-3">
          <div className="flex flex-row items-center gap-2">
            <Icon icon={"tabler:building-bank"} className="text-4xl" />
            <p className="text-2xl">
              Techonological Institute of the Philippines{" "}
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Icon icon={"tabler:map-pin"} className="text-4xl" />
            <p>Quezon City</p>
          </div>
          <div className="flex flex-col">
            <p>
              Bachelor's Degree in Bachelor of Science in Information Technology
            </p>
            <p>2018-2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}
