// import pic
export default function Other() {
  return (
    <div
      id="other"
      className="w-[70%] flex justify-center flex-col gap-10 max-w-4xl mx-auto px-4 py-12 text-center"
    >
      <div className="w-3/5 aspect-square rounded-full overflow-hidden self-center">
        <img
          src="pic.jpg"
          alt="picture"
          className="w-full h-full object-cover"
        />
      </div>
      <p>
        Aside from developing, I play a lot of games with a wide variety of
        genres from cozy single player games to stressfull MOBA games. I also
        love to play guitar for our God! I serve and at our church as a
        guitarist every weekends.
      </p>
    </div>
  );
}
