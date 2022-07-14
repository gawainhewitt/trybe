import React, { useState, useContext } from "react";
import { Keyboard, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import styles from "./NewGoal.component.style";
import { uploadGoal } from "../../store/goals/goals.actions";
import { useDispatch } from "react-redux";
import { createAlert } from "../functions/createAlert";

import { AuthContext } from "../context/AuthContext";

function NewGoal() {
  const { user } = useContext(AuthContext);
  const [text, onChangeText] = useState("");
  const dispatch = useDispatch();

  const handleUploadGoal = () => {
    if (text != "") {
      dispatch(uploadGoal({ token: user.auth_token, text: text }));
      onChangeText("");
      Keyboard.dismiss();
    } else {
      createAlert("Invalid Input!", "No goal specified");
    }
  };

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
          handleUploadGoal();
        }}
      >
        Create Goal
      </Button>
    </View>
  );
}

export default NewGoal;
