import "./home.css";

function Home() {
  return (
    <div
      id="home"
      className="sm:snap-start h-[100vh] p-5 md:p-10 lg:p-15 flex flex-col md:flex-row items-center md:items-start justify-between"
    >
      <div className="w-full my-60  md:my-auto md:w-[65%] lg:px-15 relative md:static -top-65 md:text-shadow-none">
        <h1 className="text-xl sm:text-2xl lg:text-3xl tracking-wide opacity-50 mt-20">
          Hello! I'm Smit
        </h1>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wider newYorkFont">
          Full Stack Web Developer
        </h1>
        <div className="relative -z-1 flex items-center justify-center mx-auto h-40 w-40 pt-3 md:hidden">
          <img
            src="/assets/profile.png"
            className="grayscale"
            alt="profile picture"
          />
        </div>
        <p className="mt-5 sm:text-lg">
          I'm a passionate web developer with a knack for creating interactive
          and user-friendly applications. I am based in Pennsylvania, USA. I
          specialize in React/NextJS and TypeScript.
        </p>
        <div className="mt-5 flex gap-5">
          <a href="#project" className="font-semibold underline">
            View Projects
          </a>
          <span>or</span>
          <a href="#about" className="font-semibold underline">
            Read About Me
          </a>
        </div>
      </div>
      <div className="md:flex hidden w-full md:w-[35%] max-h-50 md:max-h-120 lg:max-h-200 object-cover my-auto">
        <img src="/assets/profile.png" className="grayscale " alt="" />
      </div>
    </div>
  );
}

export default Home;
