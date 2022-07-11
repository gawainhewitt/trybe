import React, { useContext } from "react";
import { SafeAreaView } from "react-native";

import NewGoal from "../components/NewGoal.component";
import ViewGoals from "../components/ViewGoals.component";

import styles from "../components/Container.component.style";

import { AuthContext } from "../context/AuthContext";

function GoalsScreen(props) {
  // const { user } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <NewGoal />
      <ViewGoals navigation={props.navigation} />
    </SafeAreaView>
  );
}

export default GoalsScreen;
