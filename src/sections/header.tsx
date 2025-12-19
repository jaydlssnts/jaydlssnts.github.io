import Nav from "./contents/nav";
export default function Header() {
  return (
    <>
      <div className="flex flex-col gap-4 p-85 items-center justify-center text-center">
        <p className="text-7xl md:text-9xl font-semibold text-orange-500">
          Hi! I am,
        </p>

        <p className="animate-float animate-spin text-7xl md:text-9xl font-extrabold text-purple-500 drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]">
          Jay Delos Santos
        </p>
      </div>
      <Nav />
    </>
  );
}
