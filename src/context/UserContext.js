import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  userInfo: {
    name: "Ratnapriya Rout",
    email: "ratnapriyachamala41@gmail.com",
  },
};

export const UserContext = createContext();

const reducers = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        userInfo: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        userInfo: null,
      };
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, INITIAL_STATE);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
