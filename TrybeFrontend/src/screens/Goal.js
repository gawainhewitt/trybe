import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

function Goal(props) {
  const data = props.route.params.data;

  return (
    <SafeAreaView style={styles.viewStyle}>
      <Text style={styles.text}>{data.goal_description}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    margin: 10,
    padding: 10,
  },
  text: {
    fontSize: 50,
  },
});

export default Goal;
