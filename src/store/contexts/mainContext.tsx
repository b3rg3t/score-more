import React, { createContext, useReducer } from "react";

import { GlobalReducer, GameReducer, PlayerReducer } from "../reducers/reducer";

type Users = {
  value: string;
  label: string;
  score: number;
};

type InitialStateType = {
  users: Users[];
  activeGame: { id: string };
  game: { title: string; players: Users[] };
};

export const initialState = {
  users: [],
  activeGame: { id: "" },
  game: {
    title: "",
    players: [],
    round: [],
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
