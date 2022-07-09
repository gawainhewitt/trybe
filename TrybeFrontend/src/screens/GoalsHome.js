import React from "react";
import { SafeAreaView } from "react-native";
import { Appbar } from "react-native-paper";

import NewGoal from "../components/NewGoal.component";
import ViewGoals from "../components/ViewGoals.component";

import styles from "../components/Container.component.style";

function GoalsHome(props) {
  return (
    <SafeAreaView style={styles.container}>
      <NewGoal />

      <ViewGoals navigation={props.navigation} />
    </SafeAreaView>
  );
}

export default GoalsHome;
