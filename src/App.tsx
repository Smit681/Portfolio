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
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const waitForImages = () => {
      const images = Array.from(document.images);
      const bgImages = Array.from(document.querySelectorAll("[style]"))
        .map((el) => {
          const match = (el as HTMLElement).style.backgroundImage.match(
            /url\(["']?([^"')]+)["']?\)/
          );
          return match ? match[1] : null;
        })
        .filter(Boolean) as string[];

      const imagePromises = [
        ...images.map((img) => {
          if (img.complete) return Promise.resolve();
          return new Promise<void>((resolve) => {
            img.onload = () => resolve();
            img.onerror = () => resolve(); // Still resolve even on error
          });
        }),
        ...bgImages.map(
          (src) =>
            new Promise<void>((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = () => resolve();
              img.onerror = () => resolve();
            })
        ),
      ];

      Promise.all(imagePromises).then(() => {
        setLoadingComplete(true);
      });
    };

    waitForImages();
  }, []);

  useEffect(() => {
    if (loadingComplete) {
      const timeout = setTimeout(() => setShowWelcome(false), 2000); // 1.5s delay
      return () => clearTimeout(timeout);
    }
  }, [loadingComplete]);

  return (
    <>
      {showWelcome ? (
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
