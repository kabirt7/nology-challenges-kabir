import { useState } from "react";
import "./App.scss";
import Button from "./components/challenge/Button";
import Heading from "./components/challenge/Heading";

function App() {
  const [mode, setMode] = useState("");

  const handleMode = () => {
    if (mode === "") {
      setMode("dark");
    } else {
      setMode("");
    }
  };
  return (
    <main className={mode}>
      <Heading mode={mode} />
      <Button btnClick={handleMode}>
        {mode === "dark" ? "Change to light mode" : "Change to dark mode"}
      </Button>
    </main>
  );
}

export default App;
