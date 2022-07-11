import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import GoalsNavigator from "./GoalsNavigator";
import SupportNavigator from "./SupportNavigator";

const Tab = createMaterialBottomTabNavigator();

function MainNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Goals"
      barStyle={{ backgroundColor: "#3700B3" }}
    >
      <Tab.Screen
        name="GoalsNavigator"
        component={GoalsNavigator}
        options={{
          tabBarLabel: "Goals",
          tabBarIcon: "bullseye-arrow",
        }}
      />
      <Tab.Screen
        name="SupportNavigator"
        component={SupportNavigator}
        options={{
          tabBarLabel: "Support",
          tabBarIcon: "crowd",
        }}
      />
    </Tab.Navigator>
  );
}

export default MainNavigator;
