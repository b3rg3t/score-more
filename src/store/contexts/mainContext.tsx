import React, { createContext, useReducer } from "react";

import { GlobalReducer } from "../reducers/reducer";

type Players = {
  runningDealDate: string;
};

type InitialStateType = {
  runningDealDate: Players["runningDealDate"];
};

export const initialState = {
  runningDealDate: "",
};

const GlobalContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({ runningDealDate }: InitialStateType, action: any) => ({
  runningDealDate: GlobalReducer(runningDealDate, action),
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