import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import ChampionSearch from "./components/championSearch";
import { Route } from "react-router-dom";
import ChampionPage from "./components/championPages";
function App() {
  const champion = useSelector((state) => state.championReducer);

  return (
    <div className="App">
      <div>
        <Route exact path="/">
          <ChampionSearch state={champion} />
        </Route>

        <Route path="/champion/:championId">
          <ChampionPage state={champion} />
        </Route>
      </div>
    </div>
  );
}

export default App;
