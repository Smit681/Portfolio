import "./App.css";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import ContactMe from "./components/ContactMe/ContactMe";
import Work from "./components/Work/Work";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds delay

    return () => clearTimeout(timer);
  });
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <ContactMe />
          <Home />
          <Projects />
          <About />
          <Work />
        </>
      )}
    </>
  );
}

export default App;
