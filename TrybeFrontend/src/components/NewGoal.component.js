import React from 'react';
import { TextInput, Button, View } from 'react-native';
import styles from './NewGoal.component.style';
import postData from '../functions/postData';

function NewGoal() {
  const [text, onChangeText] = React.useState("Enter Goal");

    return(
      <View style={styles.box2}>

        <View style={styles.innerBox2}>

          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />  

          <Button
            title="Press me"
            onPress={() => postData(text)}
          />

        </View>
        
      </View>
    );
}

export default NewGoal;