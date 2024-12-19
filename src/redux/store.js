import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./slice";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

// Configuration for persisting walletReducer in session storage
const persistConfigSession = {
  key: "wallet",
  storage: storageSession,
  // whitelist or blacklist specific reducers if necessary
};

// Persist walletReducer with session storage
const persistedWalletReducer = persistReducer(persistConfigSession, walletReducer);

// Configure store with persisted reducers and add serializable check fallback
const store = configureStore({
  reducer: {
    wallet: persistedWalletReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore paths containing non-serializable values if needed
        ignoredActions: ["persist/PERSIST"],
        ignoredPaths: ["wallet"],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
