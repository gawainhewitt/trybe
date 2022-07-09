import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  TextInput,
  View,
  Keyboard,
} from "react-native";
import { removeGoal, editGoal } from "../../store/goals/goals.actions";
import { useDispatch } from "react-redux";

function Goal(props) {
  const data = props.route.params.data;
  const [shouldShow, setShouldShow] = useState(false);
  const [text, onChangeText] = useState(data.goal_description);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.viewStyle}>
      <Text style={styles.text}>{data.goal_description}</Text>
      <Button
        title="Delete Goal"
        onPress={() => {
          dispatch(removeGoal(data.id));
          props.navigation.navigate("GoalsHome");
        }}
      />
      <Button title="Update Goal" onPress={() => setShouldShow(!shouldShow)} />

      {shouldShow ? (
        <View>
          <TextInput value={text} onChangeText={onChangeText} />
          <Button
            title="Update"
            onPress={() => {
              dispatch(editGoal({ id: data.id, goal_description: text }));
              Keyboard.dismiss();
              props.navigation.navigate("GoalsHome");
            }}
          />
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
});

export default Goal;
