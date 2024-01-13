import "./components/Header/Header";
import "./App.scss";
import CardContainer from "./components/CardContainer/CardContainer";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [starshipName, setStarshipName] = useState("");
  return (
    <>
      <Header setStarshipName={setStarshipName} />
      <CardContainer starshipName={starshipName} />
    </>
  );
}

export default App;
