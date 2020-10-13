// import { initialState } from "../contexts/mainContext";

import { initialState } from "../contexts/mainContext";

const GlobalReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_ORGANIZATIONS":
      return action.payload.values;

    case "CLEAR_ORGANIZATIONS":
      return [];

    case "REMOVE_ORGANIZATION":
      return state.filter((s: any) => s.value !== action.payload.value);

    default:
      return state;
  }
};

const GameReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload.value };

    case "SET_DESCRIPTION":
      return { ...state, description: action.payload.description };

    default:
      return state;
  }
};
const PlayerReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_PLAYER":
      return [...state, action.payload.value];

    case "SET_PLAYERS": 
      return action.payload.value

    case "CLEAR_PLAYERS":
      return [];

    case "REMOVE_PLAYER":
      return state.filter((s: any) => s.value !== action.payload.value);

    case "SET_INITIALSTATE":
      return initialState;

    default:
      return state;
  }
};

export { GameReducer, PlayerReducer, GlobalReducer };
