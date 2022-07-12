import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView, StyleSheet, Text, View, Keyboard } from "react-native";
import { removeGoal, editGoal } from "../../store/goals/goals.actions";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextInput, Card, Title } from "react-native-paper";
import { AuthContext } from "../context/AuthContext";
import { createAlert } from "../functions/createAlert";
import getEnvVars from "../../environment";
const { REACT_APP_APIKEY } = getEnvVars();

function GoalDetailScreen(props) {
  const id = props.route.params.id;
  let goal = useSelector((state) => state.goals.find((goal) => goal.id === id));

  const [shouldShow, setShouldShow] = useState(false);
  const [text, onChangeText] = useState(goal.goal_description);
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);

  useEffect(() => {}, [dispatch]);

  const handleEditGoal = () => {
    if(text != "") {
      dispatch(
        editGoal({
          token: user.id,
          id: goal.id,
          goal_description: text,
        })
      );
      Keyboard.dismiss();
      setShouldShow(!shouldShow);
    }else{
      createAlert("Invalid Input!", "Field cannot be empty");
    }
  }

  return (
    <SafeAreaView style={styles.viewStyle}>
      <Card style={styles.cardStyle}>
        <Card.Content>
          <Title>Goal</Title>
          <Text>{goal.goal_description}</Text>
        </Card.Content>
      </Card>
      <View style={styles.row}>
        <Button icon="pencil" onPress={() => setShouldShow(!shouldShow)}>
          Update Goal
        </Button>
        <Button
          icon="delete"
          onPress={() => {
            dispatch(removeGoal({ token: user.id, id: goal.id }));
            props.navigation.navigate("GoalsScreen");
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
              handleEditGoal();
            }}
          >
            Update
          </Button>
        </View>
      ) : null}

      <View>
      <TextInput
            style={styles.input}
            value={"email address"}
            onChangeText={onChangeText}
          />
          <Button
            mode="contained"
            onPress={() => {
              emailSupporter()
            }}
          >
            Add Supporter
          </Button>
      </View>

    </SafeAreaView>
  );
}

const emailSupporter = async () => {
  console.log('email sent');
  const url = `https://api.sendgrid.com/v3/mail/send`;
  const data = {"personalizations" : [{"to":[{"email":"lukemstorey@gmail.com","name":"Luke"}],"subject":"Please join my Trybe"}],"content": [{"type": "text/plain", "value": "I am trying to drink more water, but Makers do not have any. I think if you helped me then I would be more successful"}],"from":{"email":"gawain@gawainhewitt.co.uk","name":"Trybe"},"reply_to":{"email":"gawain@gawainhewitt.co.uk","name":"Trybe"}};
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Authorization": `Bearer ${REACT_APP_APIKEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
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
  cardStyle: {
    padding: 10,
  },
});

export default GoalDetailScreen;
