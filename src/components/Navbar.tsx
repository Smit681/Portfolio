import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50 ? true : false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className={`z-30 fixed top-0 w-full robotoFont px-2 ${
        isScrolled ? "text-black bg-white shadow-md" : "text-white"
      }`}
    >
      <div className="flex justify-between text-xl text-shadow-md items-center py-2">
        <div className="flex gap-4 items-center md:mx-auto">
          {isScrolled ? (
            <img src="/assets/blackLogo.png" alt="logo" className="h-15 w-15" />
          ) : (
            <></>
          )}
          <a
            className="hover:cursor-pointer"
            onClick={() =>
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Smit Shah
          </a>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex gap-10 mx-auto">
          <a
            className="hover:cursor-pointer hover:scale-105 transition-all duration-75"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Projects
          </a>
          <a
            className="hover:cursor-pointer hover:scale-105 transition-all duration-75"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Read About Me
          </a>
          <a
            className="hover:cursor-pointer hover:scale-105 transition-all duration-75"
            onClick={() =>
              document
                .getElementById("work")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Work Experience
          </a>
        </div>

        {/* Mobile Navbar */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden hover:cursor-pointer ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-black absolute top-full left-0 w-full shadow-md animate-fade-in">
          <div className="mx-auto px-4 py-4 flex flex-col space-y-4 hover:cursor-pointer">
            <a
              className="transition-colors font-medium py-2"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </a>
            <a
              className="  transition-colors font-medium py-2"
              onClick={() => {
                setIsMobileMenuOpen(false);

                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Projects
            </a>
            <a
              className="  transition-colors font-medium py-2"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Read About Me
            </a>
            <a
              className="  transition-colors font-medium py-2"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Work Experience
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}

export default Navbar;
