import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GoalsHome from "./GoalsHome";
import Goal from "./Goal";

const Stack = createNativeStackNavigator();

function Goals() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GoalsHome"
        component={GoalsHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Goal"
        component={Goal}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Goals;
