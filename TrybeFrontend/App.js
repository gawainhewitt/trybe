import React from "react";
import Goals from "./src/screens/Goals";
import Support from "./src/screens/Support";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import rootReducer from "./store/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const store = configureStore({
  reducer: rootReducer,
});

function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { paddingBottom: 2 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Goals") {
            iconName = "target";
          } else if (route.name === "Support") {
            iconName = "eye";
          }
          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Goals" component={Goals} />
      <Tab.Screen name="Support" component={Support} />
    </Tab.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </NavigationContainer>
  );
};
