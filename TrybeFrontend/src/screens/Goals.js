import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GoalsHome from "./GoalsHome";
import Goal from "./Goal";
import NavigationBar from "../components/NavigationBar";

const Stack = createNativeStackNavigator();

function Goals() {
  return (
    <Stack.Navigator
      initialRouteName="GoalsHome"
      screenOptions={{
        header: (props) => <NavigationBar {...props} />,
      }}
    >
      <Stack.Screen name="GoalsHome" component={GoalsHome} />
      <Stack.Screen name="Goal" component={Goal} />
    </Stack.Navigator>
  );
}

export default Goals;
