import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationBar from "../components/NavigationBar";
import SupportGoalsScreen from "../screens/SupportGoalsScreen";
import GoalDetailScreen from "../screens/GoalDetailScreen";


const Stack = createNativeStackNavigator();

function SupportNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="SupportGoalsScreen"
      screenOptions={{
        header: (props) => <NavigationBar {...props} />,
      }}
    >
      <Stack.Screen name="SupportGoalsScreen" component={SupportGoalsScreen} />
      <Stack.Screen name="GoalDetailScreen" component={GoalDetailScreen} />
    </Stack.Navigator>
  );
}

export default SupportNavigator;
