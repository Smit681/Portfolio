import "./navbar.css";

function Navbar() {
  return (
    <header className="navbar flex items-center bg-white shadow z-10 h-20 p-5">
      <a href="/" className="flex items-center">
        <img src="/assets/logo.jpg" alt="logo" className="w-18 mr-3" />
        <div>
          <h1 className="text-3xl font-semibold tracking-wider"> SMIT SHAH</h1>
          <p className="text-gray-600 text-center tracking-wider">
            WEB DEVELOPER
          </p>
        </div>
      </a>
      <div className="ml-auto text-xl gap-5 hidden sm:flex">
        <a href="#home">Home</a>
        <a href="#project">Project</a>
        <a href="#about">About</a>
      </div>
    </header>
  );
}

export default Navbar;
