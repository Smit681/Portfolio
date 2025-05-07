export default function Work() {
  return (
    <div
      id="about"
      className="p-5 md:p-10 lg:p-15 flex flex-col justify-center items-center"
    >
      <div className="robotoFont text-center text-3xl md:text-5xl font-bold mb-10 pb-2 border-b-2 border-gray-400">
        Work Experience
      </div>
      <hr className="border-t border-gray-400" />

      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-[5vw] w-full max-w-[1200px] justify-center items-center">
        <div className="text-3xl/10 md:text-5xl/15 font-bold uppercase tracking-wider text-center">
          Where I've <span className="newYorkFont"> Contributed</span>
        </div>
        <div>
          <div className="space-y-16">
            <div>
              <h3 className="text-xl font-semibold">
                YuJa Inc. / Quality Assurance Engineer
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                September 2022 – December 2024
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Jest",
                  "Selenium",
                  "Playwright",
                  "Azure DevOps CI/CD pipelines",
                  "Cross-Browser Testing",
                  "API Testing ",
                  "Postman",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="border px-3 py-1 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="text-gray-700 mt-4 max-w-3xl leading-relaxed">
                Over the past two years, I led end-to-end quality assurance
                efforts by developing and executing Selenium-based automation,
                validating RESTful APIs with Postman, and performing SQL-driven
                backend verification. I built robust test suites using NUnit and
                integrated testing into Azure DevOps CI/CD pipelines.
                Additionally, I spearheaded a data migration toolkit for Canvas
                Studio, increasing company revenue by 4.8%, and earned two
                Employee of the Month awards for excellence in QA and
                cross-functional collaboration.
              </div>
            </div>
            <div className="pt-8 border-t">
              <h3 className="text-xl font-semibold">
                Binary Republik / Web Developer (Internship)
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                August 2020 – September 2022
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "React",
                  "TypeScript",
                  "Next.js",
                  "CI/CD pipelines",
                  "Agile Environment",
                  "Git",
                  "API Testing",
                  "Object-Oriented Programming",
                  "Tailwind CSS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="border px-3 py-1 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-gray-700 mt-4 max-w-3xl leading-relaxed">
                As a Full Stack Web Developer intern, I contributed to building
                and optimizing scalable web applications using a modern tech
                stack including Next.js, React, Tailwind CSS, Node.js, and
                PostgreSQL/MongoDB. I collaborated closely with cross-functional
                teams in an Agile environment, developing responsive UIs,
                implementing RESTful APIs, integrating third-party services, and
                ensuring performance optimization and accessibility. I also
                played a key role in setting up CI/CD pipelines, managing cloud
                deployments, and maintaining clean, maintainable code with Git
                version control—gaining hands-on experience across the full
                development lifecycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
