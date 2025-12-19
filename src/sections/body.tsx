import Educ from "./contents/educ";
import Other from "./contents/other";
import Proj from "./contents/proj";
import Tech from "./contents/tech";
import Work from "./contents/work";
export default function Body() {
  return (
    <div className="flex flex-col gap-96 w-full place-self-center m-12">
      <Educ />
      <Work />
      <Proj />
      <Tech />
      <Other />
    </div>
  );
}
