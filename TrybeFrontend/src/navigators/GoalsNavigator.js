import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GoalsScreen from "../screens/GoalsScreen";
import GoalDetailScreen from "../screens/GoalDetailScreen";
import NavigationBar from "../components/NavigationBar";

const Stack = createNativeStackNavigator();

function GoalsNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="GoalsScreen"
      screenOptions={{
        header: (props) => <NavigationBar {...props} />,
      }}
    >
      <Stack.Screen name="GoalsScreen" component={GoalsScreen} />
      <Stack.Screen name="GoalDetailScreen" component={GoalDetailScreen} />
    </Stack.Navigator>
  );
}

export default GoalsNavigator;
