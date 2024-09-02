// src/App.js

import { useState } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WelcomeScreen from "./components/WelcomeScreen";

function App() {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  const hideWelcomeScreen = () => {
    setShowWelcomeScreen(false);
  };

  return (
    <div>
      {showWelcomeScreen ? (
        <WelcomeScreen onHide={hideWelcomeScreen} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Skills />
          <About />
          <Work />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
