import "./contactMe.css";
import { Mail, X } from "lucide-react";
import { useState } from "react";
import { FaArrowUp, FaGoogle, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function ContactMe() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [animateHide, setAnimateHide] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const showDiv = () => {
    setIsVisible(true);
    setAnimateHide(false);
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };

  const hideDiv = () => {
    setAnimateHide(true);
    setTimeout(() => {
      setShowContent(false);
    }, 500);
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  return (
    <div className={`fixed z-50 `}>
      <a href="#home">
        <FaArrowUp className=" text-white bg-black fixed bottom-13 sm:bottom-17 left-3 rounded-full size-9 sm:size-12 p-2" />
      </a>
      <div
        className={`flex size-9 sm:size-12 text-white bg-black fixed bottom-3 left-3 p-1.5 sm:p-3 rounded-full hover:cursor-pointer hover:w-35 transition-all duration-300 items-center justify-center gap-3 ${
          isVisible ? "hidden" : "flex"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={showDiv}
      >
        <Mail />
        <div
          className={`text-sm text-white fade-in ${
            isHovered ? "flex" : "hidden"
          }`}
        >
          Contact Me
        </div>
      </div>

      {isVisible && (
        <div
          className={`bg-black fixed grid grid-cols-1 md:grid-cols-2 overflow-y-auto md:overflow-y-hidden

 ${animateHide ? "remove-Annimation" : "contactCard"}`}
        >
          {showContent && <MessageContent hideDiv={hideDiv} />}
        </div>
      )}
    </div>
  );
}

function MessageContent({ hideDiv }: { hideDiv: () => void }) {
  return (
    <>
      <div className="flex flex-col  text-white w-full py-10 pl-10">
        <h1 className="text-2xl md:text-4xl font-bold py-2 md:py-5 tracking-wider">
          Get in Touch
        </h1>

        <h3 className="opacity-60">Name</h3>
        <h2 className="pb-3">Smit Shah</h2>

        <h3 className="opacity-60">Address</h3>
        <h2>Whitehall PA 18052</h2>
        <h2 className="pb-3">USA</h2>

        <h3 className="opacity-60">Email</h3>
        <h2 className="pb-3">syshah681@gmail.com</h2>
      </div>

      <div className="flex flex-col text-white pt-0 md:pt-10 px-5">
        <h1 className="text-2xl md:text-4xl font-bold py-2 md:py-4 text-center tracking-wider">
          Message Me
        </h1>
        <ContactForm />
        <h2 className="text-center text-sm">Or</h2>
        <h2 className="text-center text-sm mb-3">Contact me on:</h2>
        <div className="flex justify-center gap-10 mb-2">
          <a
            href="https://www.linkedin.com/in/smit-shah-4767431a7/"
            target="_blank"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://github.com/Smit681" target="_blank">
            <FaGithub size={20} />
          </a>
          <a href="mailto:syshah681@gmail.com" target="_blank">
            <FaGoogle size={20} />
          </a>
        </div>
      </div>

      <button className="text-white" onClick={hideDiv}>
        <X
          size={25}
          className="absolute top-5 right-5 hover:cursor-pointer hover:scale-110"
        />
      </button>
    </>
  );
}

function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/mrbqqdeo"
      method="POST"
      className="max-w-xl mx-auto pt-4 pb-2 space-y-4"
    >
      <div className="flex gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-1/2 px-3 py-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-1/2 px-3 py-2 border rounded"
        />
      </div>
      <textarea
        name="purpose"
        placeholder="Let's talk..."
        required
        className="w-full px-3 py-2 border rounded resize-none h-20"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 hover:cursor-pointer"
      >
        Hire me
      </button>
    </form>
  );
}
