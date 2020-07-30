const initialState = {
  champion: "",
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
    default:
      return state;
  }
};
