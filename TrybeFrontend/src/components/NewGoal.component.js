import React, { useState } from "react";
import { TextInput, Button, View } from "react-native";
import styles from "./NewGoal.component.style";
import postData from "../functions/postData";

function NewGoal() {
  const [text, onChangeText] = useState("");

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
        onPress={() => postData(text)}
      />
    </View>
  );
}

export default NewGoal;
