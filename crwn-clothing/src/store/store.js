// import {
//   compose,
//   legacy_createStore as createStore,
//   applyMiddleware,
// } from "redux";
import {configureStore} from '@reduxjs/toolkit'
// import { persistStore, persistReducer } from "redux-persist";
import logger from "redux-logger";
// import storage from "redux-persist/lib/storage";
// // import thunk from "redux-thunk";
// import createSagaMiddleware from "redux-saga";
// import { rootSaga } from "./root-saga";

import { rootReducer } from "./root-reducer";

// //middleware
// // const FUNCTION = (store) => (next) => (action) => {}
// // decide when fire! order with rendering!

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["cart"],
// };
// const sagaMiddleware = createSagaMiddleware();

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV === "development" && logger
].filter(Boolean);

// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck: false,
  }),
})
// createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );

// sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store);
