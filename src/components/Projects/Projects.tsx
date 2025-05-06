import "./projects.css";
import { useState } from "react";

function Projects() {
  const [counter, setCounter] = useState(0);
  const [animate, setAnimate] = useState(false);

  const nextProject = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
      if (counter < data.length - 1) {
        setCounter(counter + 1);
      } else {
        setCounter(0);
      }
    }, 800);
  };

  return (
    <div
      id="project"
      className="md:snap-start md:h-[100vh] p-5 md:p-10 lg:p-15 flex flex-col-reverse md:flex-row items-center md:items-start justify-between bg-black text-white"
    >
      <div className="w-full md:w-[40%] mt-20 mb-auto flex items-center justify-center flex-col">
        <h1 className="hidden md:flex text-center text-5xl font-bold mb-10">
          Projects
        </h1>
        <p
          className={`transition-all duration-1000 transform ${
            animate ? "opacity-0 scale-50" : "opacity-100 scale-150;"
          }`}
        >
          {data[counter].desc}
        </p>
        <h1 className="text-center text-xl my-10 bg-blue-600 hover:bg-blue-700 w-40 px-4 py-2 rounded-3xl">
          <a href={data[counter].link}>Visit Project</a>
        </h1>
      </div>
      <div className="w-full md:w-[60%] relative mt-10">
        <div className="relative w-[80vw] max-w-[460px] aspect-square mx-auto">
          <svg
            className={`absolute inset-0 w-full h-full z-10 spin-slow`}
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1"
              strokeDasharray="10 5"
            />
          </svg>
          <img
            src={data[counter].image}
            alt={data[counter].name}
            className={`w-[90%] h-[90%] rounded-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-1000 ${
              animate ? "opacity-0 scale-50" : "opacity-100 scale-150;"
            }`}
          />

          <h2
            className={`absolute top-[15%] left-0 text-xl font-semibold z-25 bg-[#23274a]/80 backdrop-blur-md text-white px-2 py-1 rounded-lg max-w-50 text-center transition-all transform duration-1000 ${
              animate ? "opacity-0 scale-50" : "opacity-100 scale-150;"
            }`}
          >
            {data[counter].stats[0].value}
          </h2>
          <h2
            className={`absolute top-[15%] right-0 text-xs font-semibold w-50 z-25 bg-[#23274a]/80 backdrop-blur-md text-white px-2 py-1 rounded-lg text-center transition-all transform duration-1000 ${
              animate ? "opacity-0 scale-50" : "opacity-100 scale-150;"
            }`}
          >
            {data[counter].quote}
          </h2>
          <p
            className={`absolute bottom-[20%] left-0 text-md z-25 bg-[#23274a]/80 backdrop-blur-md text-white px-2 py-1 rounded-lg max-w-50 text-center transition-all transform duration-1000 ${
              animate ? "opacity-0 scale-50" : "opacity-100 scale-150;"
            }`}
          >
            {data[counter].stats[1].value}
          </p>
          <p
            className={`absolute bottom-[20%] right-0 text-md max-w-50 z-25 bg-[#23274a]/80 backdrop-blur-md text-white px-2 py-1 rounded-lg text-center transition-all transform duration-1000 ${
              animate ? "opacity-0 scale-50" : "opacity-100 scale-150;"
            }`}
          >
            {data[counter].stats[2].value}
          </p>

          {/* Title */}
          <h1
            className={`absolute bottom-[-5%] text-5xl font-bold z-25 w-full text-center bg-black/20 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)] px-2 py-1 rounded transition-all transform duration-1000 ${
              animate ? "opacity-0 scale-50" : "opacity-100 scale-150;"
            }`}
          >
            {data[counter].name}
          </h1>

          {/* Next Project Button */}
          <button
            className=" hover:cursor-pointer hover:bg-white hover:scale-105 absolute right-[-8%] top-[40%] bg-white/95 text-black rounded-full w-[80px] h-[80px] flex flex-col items-center justify-center font-bold text-sm text-center leading-tight shadow-lg z-25 "
            onClick={nextProject}
          >
            NEXT PROJECT
          </button>
        </div>
      </div>
      <h1 className="flex md:hidden text-center text-5xl font-bold mb-5">
        Projects
      </h1>
    </div>
  );
}

const data = [
  {
    image: "./assets/foodhub.jpg",
    name: "Little India",
    desc: "Created using Express in the backend, CSS/Bootstrap/Handlebars/jQuery in the frontend and MongoDB for the database, following MVC software design. User can create a cart of dishes and place an order. Administrators can add/update/remove data from the database. SendGrid is used for sending email upon signup and order. User passwords are encrypted using bcryptjs. Hosted on Heroku.",
    link: "https://little-india.onrender.com/",
    quote:
      "An online restaurant where user creates carts, order food and admins manipulates menu using CRUD operations",
    stats: [
      { value: "Express WebApp" },
      { value: "CSS, Bootstrap Handlebars, jQuery" },
      { value: "MVC software design" },
    ],
  },
  {
    image: "./assets/tax.jpg",
    name: "Tax calculator",
    desc: "GUI Application to calculate federal and provincial tax deduction on income based on 2022 and 2021 Canada rates. Created using Java and JavaFX.",
    link: "https://github.com/Smit681/Tax-Calculator",
    quote:
      "Java Application to calculate fedral and provincial tax for 2020 and 2021. Returns Gross income",
    stats: [
      { value: "Java, JavaFX, Scenebuilder" },
      { value: "Data Structure/Algorithm" },
      { value: "GUI application" },
    ],
  },
  {
    image: "./assets/inventory.jpg",
    name: "Inventory Management",
    desc: "C++ project created using Object-Oriented programming that processes customer orders at any number of stations and keep inventory track by generating daily report. Implements classes, templets, inheritance, polymorphism, threads, algorithm and creates time-efficient program.",
    link: "https://github.com/Smit681/Customer-Order-and-Inventory-management",
    quote:
      "C++ algorithm created using OOP concepts. Manages customer orders and inventory of multy location store ",
    stats: [
      { value: "Object-Oriented Programming" },
      { value: "Robust algorithm" },
      { value: "Threads, time-efficient" },
    ],
  },
];

export default Projects;
