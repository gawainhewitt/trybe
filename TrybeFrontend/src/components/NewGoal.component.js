import React, { useState, useContext } from "react";
import { Keyboard, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import styles from "./NewGoal.component.style";
import { uploadGoal } from "../../store/goals/goals.actions";
import { useDispatch } from "react-redux";

import { AuthContext } from "../context/AuthContext";

function NewGoal() {
  const { user } = useContext(AuthContext);
  const [text, onChangeText] = useState("");
  const dispatch = useDispatch();

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder="Enter Goal"
        onChangeText={onChangeText}
        value={text}
      />

      <Button
        mode="contained"
        icon="plus-circle"
        onPress={async () => {
          dispatch(uploadGoal({ token: user.id, text: text }));
          onChangeText("");
          Keyboard.dismiss();
        }}
      >
        Create Goal
      </Button>
    </View>
  );
}

export default NewGoal;
