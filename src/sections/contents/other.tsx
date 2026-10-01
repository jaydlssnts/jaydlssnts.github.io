export default function Other() {
  return (
    <div className="w-full flex flex-col items-center gap-10 text-center">
      <div className="w-3/5 aspect-square rounded-full overflow-hidden self-center border-2 border-fg">
        <img
          src="pic.jpg"
          alt="picture"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-fg-dim max-w-2xl">
        Aside from developing, I play a lot of games with a wide variety of
        genres from cozy single player games to stressfull MOBA games. I also
        love to play guitar for our God! I serve and at our church as a
        guitarist every weekends.
      </p>
    </div>
  );
}
