import React, { createContext, useReducer } from "react";

import { GlobalReducer } from "../reducers/reducer";

type UsersType = {
    id: string
    score: number
};

type GameType = {
    id: string
}

type InitialStateType = {
    data: {
        users: UsersType[]
        activeGame: GameType[]
    }
};

export const initialState = {
    data: { users: [], activeGame: [] },
};

const GlobalContext = createContext<{
    state: InitialStateType;
    dispatch: React.Dispatch<any>;
}>({
    state: initialState,
    dispatch: () => null,
});

const mainReducer = ({ data }: InitialStateType, action: any) => ({
    data: GlobalReducer(data, action),
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