import "./Assets/styles/MainApp.css";
import "./Assets/styles/common.css"
import Layout from "./components/Layout/Layout";
import { createContext, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

export const themeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("light");

  //Toggle between two themes
  const toggleTheme = (() => {
    setTheme((curr) => curr === "light" ? "dark" : "light")
  })

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  return (
    <themeContext.Provider value={{ theme, toggleTheme }} >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Layout />
    </themeContext.Provider>
  );
}

export default App;
