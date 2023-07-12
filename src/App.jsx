import { useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <main
        className={`bg-white px-10 md:px-40 lg:px-80}  ${
          darkMode ? "dark" : ""
        }`}
      >
        <section className={` min-h-screen `}>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          <Outlet />
        </section>
      </main>
    </>
  );
}

export default App;
