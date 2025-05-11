import "./App.css";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Work from "./components/Work";
import Footer from "./components/Footer";

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
          <Home />
          <About />
          <Projects />
          <Work />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
