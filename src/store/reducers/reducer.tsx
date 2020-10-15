// import { initialState } from "../contexts/mainContext";

import { initialState } from "../contexts/mainContext";

const GlobalReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_ACTIVE_ID":
      return { id: action.payload.value };

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

    case "SET_GAME_INITIALSTATE":
      return initialState.game;

    case "ADD_PLAYER":
      return { ...state, players: [...state.players, action.payload.value] };

    case "SET_PLAYERS":
      return { ...state, players: action.payload.value };

    case "CLEAR_PLAYERS":
      return { ...state, players: [] };

    case "REMOVE_PLAYER":
      return {
        ...state,
        players: state.players.filter(
          (s: any) => s.value !== action.payload.value
        ),
      };

    default:
      return state;
  }
};
const PlayerReducer = (state: any, action: any) => {
  switch (action.type) {
    // case "ADD_PLAYER":
    //   return [...state, action.payload.value];

    // case "SET_PLAYERS":
    //   return action.payload.value;

    // case "CLEAR_PLAYERS":
    //   return [];

    // case "REMOVE_PLAYER":
    //   return state.filter((s: any) => s.value !== action.payload.value);

    default:
      return state;
  }
};

export { GameReducer, PlayerReducer, GlobalReducer };
