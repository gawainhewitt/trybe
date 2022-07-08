import React from "react";
import Goals from "./src/screens/Goals";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Goals" component={Goals} />
    </Tab.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
