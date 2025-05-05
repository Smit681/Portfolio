import "./home.css";

function Home() {
  return (
    <div
      id="home"
      className="md:snap-start md:h-[100vh] p-5 md:p-10 lg:p-15 flex flex-col-reverse md:flex-row items-center md:items-start justify-between"
    >
      <div className="w-full md:w-[65%] md:mt-auto md:mb-10 mt-30 lg:px-15">
        <h1 className="text-2xl lg:text-3xl tracking-wide opacity-50">
          SMIT SHAH
        </h1>
        <h1 className="text-5xl lg:text-6xl font-bold tracking-wider">
          FULL STACK WEB DEVELOPER
        </h1>
        <p className="mt-5 text-lg">
          This is the home page of the application. You can navigate to other
          pages using the links in the navigation bar.
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
      <div className="md:flex hidden w-full md:w-[35%] max-h-50 md:max-h-120 object-cover my-auto">
        <img src="/assets/profile.png" className="grayscale " alt="" />
      </div>
    </div>
  );
}

export default Home;
