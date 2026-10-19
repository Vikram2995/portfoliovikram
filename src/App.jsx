import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import { useLanguage } from "./hooks/useLanguage";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  const [theme, setTheme] = useState("light");
  const { language, setLanguage } = useLanguage();

  // APPLY THEME
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );
  }, [theme]);

  // CHECK GOOGLE TRANSLATE READINESS
  useEffect(() => {
    const checkGoogleTranslate = setInterval(() => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        console.log("✅ Google Translate loaded");
        clearInterval(checkGoogleTranslate);
      }
    }, 500);

    return () => clearInterval(checkGoogleTranslate);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : "light"
    );
  };

  // CHANGE LANGUAGE
  const changeLanguage = (lang) => {
    setLanguage(lang);
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change", { bubbles: true }));
      select.dispatchEvent(new Event("input", { bubbles: true }));
      if (select.onchange) select.onchange();
    } else {
      console.warn("Google Translate not ready. Language set to context.");
    }
  };

  return (
    <>
      {/* Header sab pages me */}
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        changeLanguage={changeLanguage}
        currentLanguage={language}
      />

      {/* Hero sirf Home route me */}
      <Routes>
       <Route path="/" element={<Home theme={theme} />} />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>

     
    </>
  );
}

export default App;