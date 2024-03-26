const Hero = () => {
  return (
    <div className="hero-container h-screen w-full overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-6 z-20">
        <h1 className="font-normal text-xl lg:text-2xl">
          Welcome to the Website of
        </h1>
        <div className="flex flex-col items-center gap-3 justify-center text-wrap text-center">
          <h1 className="font-bold text-5xl lg:text-7xl leading-snug italic">
            Barangay Lumbia
          </h1>
          <h1 className="font-bold text-5xl lg:text-7xl leading-snug italic">
            SANGUNIANG KABATAAN
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
