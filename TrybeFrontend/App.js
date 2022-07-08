import React from "react";
import Goals from "./src/screens/Goals";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux';
import rootReducer from './store/rootReducer';
import { configureStore } from '@reduxjs/toolkit';


const Tab = createBottomTabNavigator();

const store = configureStore({
  reducer: rootReducer
});

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
      <Provider store={store}>
        <App />
      </Provider>
    </NavigationContainer>
  );
};
