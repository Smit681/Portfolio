import "./App.css";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/projects.tsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  });
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="App h-screen overflow-y-scroll snap-y snap-mandatory">
          <Navbar />
          <Home />
          <Projects />
        </div>
      )}
    </>
  );
}

export default App;
