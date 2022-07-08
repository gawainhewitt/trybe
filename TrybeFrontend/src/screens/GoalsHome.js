import React from "react";
import { SafeAreaView, Button } from "react-native";

import Title from "../components/Title.component";
import NewGoal from "../components/NewGoal.component";
import ViewGoals from "../components/ViewGoals.component";

import styles from "../components/Container.component.style";

function GoalsHome(props) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Title /> */}

      <NewGoal />

      <ViewGoals navigation={props.navigation} />
    </SafeAreaView>
  );
}

export default GoalsHome;
