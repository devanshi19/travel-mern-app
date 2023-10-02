import "./Assets/styles/MainApp.css";
import "./Assets/styles/common.css"
import Layout from "./components/Layout/Layout";
import { createContext, useState ,useEffect} from "react";

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
      <Layout />
    </themeContext.Provider>
  );
}

export default App;
