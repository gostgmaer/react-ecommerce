// import { applyMiddleware, combineReducers, createStore } from "redux";

// import { composeWithDevTools } from "@redux-devtools/extension";

// import { logger } from "redux-logger";
// import thunk from "redux-thunk";
// import rootReducer from "./reducer";

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(logger, thunk))
// );

// export default store;

import CartReducer from "./CartReducer";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, CartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
