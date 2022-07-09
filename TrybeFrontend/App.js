import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { Provider as StoreProvider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";

import rootReducer from "./store/rootReducer";
import { configureStore } from "@reduxjs/toolkit";

import { AuthProvider } from "./src/context/AuthContext";

import AuthNavigator from "./src/navigators/AuthNavigator";

const store = configureStore({
  reducer: rootReducer,
});

function App() {
  return <AuthNavigator />;
}

export default () => {
  return (
    <NavigationContainer>
      <StoreProvider store={store}>
        <PaperProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </PaperProvider>
      </StoreProvider>
    </NavigationContainer>
  );
};
