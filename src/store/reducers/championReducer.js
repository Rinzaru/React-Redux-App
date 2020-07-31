const initialState = {
  champion: "",
  singleChampion: "",
  isFetching: false,
  error: "",
};

export const championReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CHAMPION":
      return {
        ...state,
        isFetching: true,
      };
    case "FETCH_CHAMPION_SUCCESS":
      return {
        ...state,
        isFetching: false,
        champion: action.payload,
        error: "",
      };
    case "FETCH_SINGLE_CHAMPION_SUCCESS":
      return {
        ...state,
        isFetching: false,
        singleChampion: action.payload,
        error: "",
      };
    default:
      return state;
  }
};
