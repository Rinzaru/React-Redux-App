import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchChampion } from "../store/actions/championActions";

const ChampionSearch = (props) => {
  console.log(props.state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChampion());
  }, []);

  return (
    <div>
      <h1>Covid</h1>
      {props.state.isFetching && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      )}
      <pre>{JSON.stringify(props.state.champion)}</pre>
    </div>
  );
};

export default ChampionSearch;
