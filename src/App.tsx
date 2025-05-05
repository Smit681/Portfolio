import "./App.css";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Navbar from "./components/Navbar/Navbar";

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
        <div className="App">
          <Navbar />
        </div>
      )}
    </>
  );
}

export default App;
