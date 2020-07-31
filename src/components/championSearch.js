import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchChampion } from "../store/actions/championActions";
import { Card, Button } from "reactstrap";
import { Link } from "react-router-dom";
const ChampionSearch = (props) => {
  // console.log(props.state.champion, "Champion props");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChampion());
  }, []);

  return (
    <div>
      <h1
        style={{
          marginLeft: "40%",
        }}
      >
        League Champions
      </h1>
      {props.state.isFetching && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          style={{
            marginLeft: "45%",
          }}
        />
      )}
      {props.state.champion.length > 0 &&
        props.state.champion.map((champion) => {
          return (
            <div key={champion.key}>
              <Card
                style={{
                  width: "65%",
                  alignItems: "center",
                  marginTop: "5px",
                  marginLeft: "20%",
                }}
              >
                <h1>
                  <Button>
                    <Link
                      to={`/champion/${champion.id}`}
                      style={{
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      {champion.name}
                    </Link>
                  </Button>
                </h1>
                <img
                  src={`http://ddragon.leagueoflegends.com/cdn/10.15.1/img/champion/${champion.id}.png`}
                  alt={champion.name}
                />
                <h2>{champion.title}</h2>
                <p>{champion.blurb}</p>
              </Card>
            </div>
          );
        })}
    </div>
  );
};

export default ChampionSearch;
