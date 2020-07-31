import axios from "axios";

export const fetchChampion = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_CHAMPION" });
    axios
      .get(
        "http://ddragon.leagueoflegends.com/cdn/10.15.1/data/en_US/champion.json"
      )
      .then((resp) => {
        // console.log("response", resp.data.data);
        const championsBad = Object.entries(resp.data.data);

        const champions = championsBad.map((champion) => {
          const champName = champion[0];
          const champData = champion[1];
          return { name: champName, ...champData };
        });
        // console.log(champions, "Champion actions");

        // const championMapping = champions.map((champion) => {
        //   const champId = champion.id;
        //   console.log(champId);
        // });

        dispatch({ type: "FETCH_CHAMPION_SUCCESS", payload: champions });
      })
      .catch((err) => console.log(err.repsonse));
  };
};
