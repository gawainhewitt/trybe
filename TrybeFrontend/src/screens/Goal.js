import React from "react";
import { SafeAreaView, StyleSheet, Text, Button } from "react-native";
import { removeGoal } from "../../store/goals/goals.actions";
import { useDispatch } from "react-redux";

function Goal(props) {
  const data = props.route.params.data;
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.viewStyle}>
      {/* <Text style={styles.text}>{data.goal_description}</Text> */}
      <Text style={styles.text}>{data.title}</Text>
      <Button
        title="Delete Goal"
        onPress={() => {
          dispatch(removeGoal(data._uuid));
          props.navigation.navigate("GoalsHome");
        }}
      />
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
