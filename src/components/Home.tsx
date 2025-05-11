import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

function Home() {
  return (
    <AnimatedSection>
      {(controls) => (
        <div
          id="home"
          className="relative min-h-[93vh] md:min-h-screen flex  items-center justify-center text-white"
        >
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          <div className="absolute inset-0 bg-[url('/assets/homeBackground.jpg')] bg-cover bg-center hidden md:block" />

          <div className="absolute inset-0 bg-[url('/assets/homeMobileBackground.jpg')] bg-cover bg-center md:hidden" />

          <div className="mx-auto px-4 z-20 text-center md:max-w-[80vw]">
            <motion.img
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.5, delay: 0.1 }}
              src="/assets/whiteLogo.png"
              alt="logo"
              className="h-[18vw] mx-auto"
            />
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-2xl lg:text-3xl tracking-wide opacity-50 font-bold newYorkFont"
            >
              Hello! I'm Smit
            </motion.h1>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl sm:text-5xl lg:text-6xl tracking-wider robotoFont simulated-bold font-black"
            >
              Full Stack Web Developer
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-5 sm:text-lg"
            >
              I'm a passionate web developer with a knack for creating
              interactive and user-friendly applications. I am based in
              Pennsylvania, USA. I specialize in React/NextJS and TypeScript.
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-5 flex gap-5 items-center justify-center text-sm sm:text-lg robotoFont"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="font-semibold hover:cursor-pointer"
              >
                View My Projects
              </button>
              <span>or</span>
              <button
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="font-semibold hover:cursor-pointer"
              >
                Read About Me
              </button>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatedSection>
  );
}

export default Home;
