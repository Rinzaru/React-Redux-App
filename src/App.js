import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import ChampionSearch from "./components/championSearch";

function App() {
  const champion = useSelector((state) => state.championReducer);

  console.log(champion, "champion state");
  return (
    <div className="App">
      <div>
        <ChampionSearch state={champion} />
      </div>
    </div>
  );
}

export default App;
