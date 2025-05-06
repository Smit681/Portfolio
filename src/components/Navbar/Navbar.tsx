import "./navbar.css";

function Navbar() {
  return (
    <header className="navbar flex items-center bg-white shadow z-30 h-20 p-5 fixed top-0 left-0 w-full">
      <a href="/" className="flex items-center">
        <img src="/assets/logo.jpg" alt="logo" className="w-18 mr-3" />
        <div>
          <h1 className="text-3xl font-semibold tracking-wider"> SMIT SHAH</h1>
          <p className="text-gray-600 text-center tracking-wider">
            WEB DEVELOPER
          </p>
        </div>
      </a>
      <div className="ml-auto text-xl gap-5 hidden sm:flex mr-10">
        <a href="#home" className="hover:transform hover:scale-110">
          Home
        </a>
        <a href="#project" className="hover:transform hover:scale-110">
          Project
        </a>
        <a href="#about" className="hover:transform hover:scale-110">
          About
        </a>
      </div>
    </header>
  );
}

export default Navbar;
