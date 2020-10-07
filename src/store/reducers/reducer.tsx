import { initialState } from "../contexts/mainContext";

export const GlobalReducer = (state: any, action: any) => {
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
