const projectsData = [
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

export default projectsData;
