import React, { useContext } from "react";
import { SafeAreaView } from "react-native";

import ViewSupporterGoals from "../components/ViewSupporterGoals.component";

import styles from "../components/Container.component.style";

import { AuthContext } from "../context/AuthContext";

function GoalsScreen(props) {
  // const { user } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <ViewSupporterGoals navigation={props.navigation} />
    </SafeAreaView>
  );
}

export default GoalsScreen;
