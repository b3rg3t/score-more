import React, { createContext, useReducer } from "react";

import { v4 as uuidv4 } from 'uuid';

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
    id: uuidv4(),
    players: [],
    round: []
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
