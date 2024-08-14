import { useState } from "react";
import "./App.css";
import StartPage from "./Pages/StartPage/StartPage";
import MainPage from "./Pages/MainPage/MainPage";

type Pages = "startPage" | "mainPage";

function App() {
  const [pageName, setPageName] = useState<Pages>("startPage");

  return (
    <div className="App">
      {pageName === "startPage" ? (
        <StartPage toMain={() => setPageName("mainPage")} />
      ) : (
        <MainPage />
      )}
    </div>
  );
}

export default App;
