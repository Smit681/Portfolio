import { motion } from "framer-motion";
import "./navbar.css";

function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="flex z-30 items-center justify-between h-10 fixed top-0 left-0 w-full px-10 sm:px-20 md:px-30 py-5 text-xs md:text-sm lg:text-md xl:text-xl "
    >
      <a href="#home">Smit Shah</a>
      <div className="display flex gap-2 md:gap-5 text-xs lg:text-sm xl:text-lg">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#work">Work</a>
      </div>
    </motion.header>
  );
}

export default Navbar;
