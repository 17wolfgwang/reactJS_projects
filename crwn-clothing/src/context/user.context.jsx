import { createContext, useState, useEffect, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

import {
  onAuthStateChangedListner,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRNET_USER: "SET_CURRNET_USER",
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRNET_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in user`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  // const {currentUser} = state;
  console.log(currentUser);

  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRNET_USER, user));
  };

  const value = { currentUser, setCurrentUser };

  //   signOutUser();
  useEffect(() => {
    const unsubcribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubcribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
