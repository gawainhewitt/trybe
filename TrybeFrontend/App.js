import React from "react";
import Goals from "./src/screens/Goals";
import Support from "./src/screens/Support";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as StoreProvider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import rootReducer from "./store/rootReducer";
import { configureStore } from "@reduxjs/toolkit";

const Tab = createMaterialBottomTabNavigator();

const store = configureStore({
  reducer: rootReducer,
});

function App() {
  return (
    <Tab.Navigator
      initialRouteName="Goals"
      // activeColor="white"
      // barStyle={{ backgroundColor: "#254441" }}
    >
      <Tab.Screen
        name="Goals"
        component={Goals}
        options={{
          tabBarLabel: "Goals",
          tabBarIcon: "bullseye-arrow",
        }}
      />
      <Tab.Screen
        name="Support"
        component={Support}
        options={{
          tabBarLabel: "Support",
          tabBarIcon: "crowd",
        }}
      />
    </Tab.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <StoreProvider store={store}>
        <PaperProvider>
          <App />
        </PaperProvider>
      </StoreProvider>
    </NavigationContainer>
  );
};
