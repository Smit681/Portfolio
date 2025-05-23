export default function About() {
  return (
    <div
      id="about"
      className={`p-5 min-h-screen md:p-10 lg:p-15 flex flex-col justify-center items-center bg-[url('/assets/white-waves.webp')]
      }`}
    >
      <div className="robotoFont text-center text-3xl md:text-5xl font-bold mb-10 pb-2 border-b-2 border-gray-400">
        About Me
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-[5vw] w-full max-w-[1200px] justify-center items-center">
        <div className="text-3xl/10 md:text-5xl/13 font-bold uppercase tracking-wider text-center">
          Driven by <span className="newYorkFont"> curiosity</span>, inspired by
          <span className="newYorkFont"> design</span>, empowered by
          <span className="newYorkFont"> code.</span>
        </div>
        <div className="text-lg/8 leading-relaxed  text-gray-600">
          <p>
            Hello, I'm Smit. I'm a Full Stack Web Developer. I have over five
            years of professional experience, and ten years of coding as a
            hobby. I started learning how to code as a cool kid wanting to hack
            games, and haven't stopped since.
          </p>
          <br />
          <p>
            From robust backend architecture with Next.js to clean, responsive
            UIs with React and TypeScript — I bring ideas to life end-to-end. I
            value writing human-readable code, and building interfaces that
            equally weigh beautiful design with accessibility for all.
          </p>
          <br />
          <p>
            My academic foundation in tech began at Seneca College in Toronto,
            where I studied Computer Programming and Analysis, followed by a
            Computer Science degree from Western Governors University in Utah.
          </p>
        </div>
      </div>
    </div>
  );
}
