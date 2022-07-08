import React, { useState } from "react";
import { TextInput, Button, View } from "react-native";
import styles from "./NewGoal.component.style";
import postGoals from "../functions/postGoals";
import { uploadGoal } from "../../store/goals/goals.actions";
import { useDispatch } from 'react-redux';

function NewGoal() {
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
        style={styles.wrapper}
        title="Create Goal"
        onPress={async () => await dispatch(uploadGoal(text))}
      />
    </View>
  );
}

export default NewGoal;
