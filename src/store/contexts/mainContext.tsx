import React, { createContext, useReducer } from "react";

import { GlobalReducer, GameReducer, PlayerReducer } from "../reducers/reducer";

type Users = {
  value: string;
  label: string;
  score: number;
};

type ActiveGameType = {
  id: string;
  title: string;
  playerIds: number[];
};

type Game = {
  id: string;
  title: string;
  players: string[];
};

type InitialStateType = {
  users: Users[];
  activeGame: ActiveGameType[];
  game: { id: string; title: string; players: string[] };
};

export const initialState = {
  users: [],
  activeGame: [],
  game: {
    title: "",
    id: "0",
    players: [],
  },
};

const GlobalContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { activeGame, users, game }: InitialStateType,
  action: any
) => ({
  activeGame: GlobalReducer(activeGame, action),
  users: PlayerReducer(users, action),
  game: GameReducer(game, action),
});

const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
