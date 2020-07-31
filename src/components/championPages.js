import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
// import Loader from "react-loader-spinner";
// import { Card, Button } from "reactstrap";
import axios from "axios";
const ChampionPage = (props) => {
  const champData = props.state.singleChampion;
  let params = useParams();
  const dispatch = useDispatch();
  // console.log(params);
  useEffect(() => {
    axios
      .get(
        `http://ddragon.leagueoflegends.com/cdn/10.15.1/data/en_US/champion/${params.championId}.json`
      )
      .then((resp) => {
        // console.log(resp.data.data);
        const champData = Object.values(resp.data.data);
        console.log(champData[0]);
        dispatch({
          type: "FETCH_SINGLE_CHAMPION_SUCCESS",
          payload: champData[0],
        });
      })
      .catch((err) => console.log(err));
  }, []);
  const makeArray = Object.values(champData);

  console.log(champData.allytips, "Data");
  return (
    <div>
      {props.state.singleChampion.length > 0 &&
        props.state.singleChampion.map((champ) => {
          console.log(champ);
          return (
            <div key={champ.key}>
              <h1>{champ.name}</h1>
              <p>{champ.lore}</p>
            </div>
          );
        })}
    </div>
  );
};
export default ChampionPage;
