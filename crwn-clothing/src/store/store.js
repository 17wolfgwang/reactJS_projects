import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

//middleware
// const FUNCTION = (store) => (next) => (action) => {}
// decide when fire! order with rendering!

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("type", action.type);
  console.log("payload", action.payload);
  console.log("currentState: ", store.getState());

  next(action);

  console.log("next State: ", store.getState());
};

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistReducer, undefined, composedEnhancers);

// export
