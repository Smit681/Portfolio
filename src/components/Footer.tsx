import { FaGithub, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Mail, X } from "lucide-react";
import { useState, useRef } from "react";

interface Rect {
  top: number;
  left: number;
  width: number;
  height: number;
}

export default function Footer() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const originalRect = useRef<Rect | null>(null);

  const [showClone, setShowClone] = useState<boolean>(false);
  const [cloneStyle, setCloneStyle] = useState<React.CSSProperties>({});

  const showDiv = () => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    originalRect.current = rect;

    setCloneStyle({
      position: "fixed",
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
      zIndex: 50,
      transformOrigin: "center",
      animation: "moveAndFlip 1.5s ease-in-out forwards ",
    });

    setShowClone(true);
  };

  const hideDiv = () => {
    if (!originalRect.current) return;

    const rect = originalRect.current;

    setCloneStyle({
      position: "fixed",
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
      zIndex: 50,
      transformOrigin: "center",
      animation: "reverseFlip 1.5s ease-out forwards",
    });

    setTimeout(() => setShowClone(false), 1500); // Match animation duration
  };

  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="px-4 sm:px-6 lg:px-8 flex flex-col">
        <div className="flex items-center justify-center">
          {/* Contact Me Button */}
          <button
            ref={buttonRef}
            onClick={showDiv}
            className="flex justify-center items-center gap-2 border hover:border-gray-300 hover:bg-gray-300 hover:text-black transition-all duration-300 px-6 py-3 text-lg font-medium rounded-full mb-4 hover:cursor-pointer"
          >
            <Mail />
            Contact Me
          </button>
        </div>
        <div className="flex mx-auto space-x-6">
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
        {showClone && (
          <>
            <div className=" fixed inset-0 z-40 bg-black/40"></div>
            <div
              style={cloneStyle}
              className={`bg-black fixed grid grid-cols-1 md:grid-cols-2 overflow-y-auto md:overflow-y-hidden z-50 `}
            >
              <MessageContent hideDiv={hideDiv} />
            </div>
          </>
        )}
      </div>

      <div className="mt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Smit Shah. All rights reserved.
      </div>
    </footer>
  );
}

function MessageContent({ hideDiv }: { hideDiv: () => void }) {
  return (
    <>
      <div className="flex flex-col text-white w-full py-10 pl-5 md:pl-10">
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
          className="absolute top-5 right-5 hover:cursor-pointer hover:scale-110 transition"
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
