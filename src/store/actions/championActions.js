import axios from "axios";

export const fetchChampion = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_CHAMPION" });
    axios
      .get(
        "http://ddragon.leagueoflegends.com/cdn/10.15.1/data/en_US/champion.json"
      )
      .then((resp) => {
        console.log(resp.data["Aatrox"], "response");

        dispatch({ type: "FETCH_CHAMPION_SUCCESS", payload: resp.data });
      })
      .catch((err) => console.log(err.repsonse));
  };
};
