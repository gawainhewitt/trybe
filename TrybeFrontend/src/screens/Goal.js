import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, Keyboard } from "react-native";
import { removeGoal, editGoal } from "../../store/goals/goals.actions";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextInput } from "react-native-paper";

function Goal(props) {
  const id = props.route.params.id;
  let goal = useSelector((state) => state.goals.find((goal) => goal.id === id));

  const [shouldShow, setShouldShow] = useState(false);
  const [text, onChangeText] = useState(goal.goal_description);
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  return (
    <SafeAreaView style={styles.viewStyle}>
      <Text style={styles.text}>{goal.goal_description}</Text>
      <View style={styles.row}>
        <Button onPress={() => setShouldShow(!shouldShow)}>Update Goal</Button>
        <Button
          onPress={() => {
            dispatch(removeGoal(goal.id));
            props.navigation.navigate("GoalsHome");
          }}
        >
          Delete Goal
        </Button>
      </View>

      {shouldShow ? (
        <View>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={onChangeText}
          />
          <Button
            title="Update"
            mode="contained"
            onPress={() => {
              dispatch(editGoal({ id: goal.id, goal_description: text }));
              Keyboard.dismiss();
              setShouldShow(!shouldShow);
            }}
          >
            Update
          </Button>
        </View>
      ) : null}
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
  row: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
    justifyContent: "space-around",
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 5,
    paddingHorizontal: 14,
    backgroundColor: "white",
  },
});

export default Goal;
