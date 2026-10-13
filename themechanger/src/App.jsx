import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import Themebtn from "./components/Themebtn";
import Card from "./components/card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    const html = document.documentElement;

    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      {" "}
      <div className="min-h-screen flex flex-wrap items-center">
        {" "}
        <div className="w-full">
          {" "}
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {" "}
            <Themebtn />{" "}
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
