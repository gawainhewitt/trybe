import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView, StyleSheet, Text, View, Keyboard, FlatList } from "react-native";
import { removeGoal, editGoal } from "../../store/goals/goals.actions";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextInput, Card, Title, ProgressBar } from "react-native-paper";
import { AuthContext } from "../context/AuthContext";
import { createAlert } from "../functions/createAlert";

import emailSupporter from "../functions/emailSupporter";
import { loadMessages } from "../../store/goals/messages.actions";

function GoalDetailScreen(props) {
  const id = props.route.params.id;
  let goal = useSelector((state) => state.goals.find((goal) => goal.id === id));

  const [shouldShow, setShouldShow] = useState(false);
  const [text, onChangeText] = useState(goal.goal_description);
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);
  const [email, setEmail] = useState(null);
  const messages = useSelector((state) => state.messages);

  useEffect(() => {
    function load() {
      dispatch(loadMessages(user.id));
    }
    load();
  }, [dispatch]);

  const handleEditGoal = () => {
    if (text != "") {
      dispatch(
        editGoal({
          token: user.id,
          id: goal.id,
          goal_description: text,
          progress: goal.progress
        })
      );
      Keyboard.dismiss();
      setShouldShow(!shouldShow);
    } else {
      createAlert("Invalid Input!", "Field cannot be empty");
    }
  };

  const handleSubmitSupporter = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      emailSupporter(email, goal);
      setEmail(null);
      Keyboard.dismiss();
    } else {
      createAlert("Invalid Input!", "Field must be an email");
    }
  };

  const updateProgress = () => {
    console.log("update progress");
    let updatedProgress = goal.progress + 0.25;
    dispatch(editGoal({token: user.id, id: goal.id, goal_description: goal.goal_description, progress: updatedProgress}));
  }

  return (
    <SafeAreaView style={styles.viewStyle}>
      <Card style={styles.cardStyle}>
        <Card.Content>
          <Title>Goal</Title>
          <Text>{goal.goal_description}</Text>
          <Button onPress={() => updateProgress()}>+</Button>
          <ProgressBar progress={goal.progress}/>
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
        <View style={styles.update}>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={onChangeText}
          />
          <Button
            title="Update"
            icon="content-save-edit"
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
          value={email}
          placeholder="enter supporter email"
          onChangeText={(text) => setEmail(text)}
        />
        <Button
          mode="contained"
          icon="account-multiple-plus"
          onPress={() => {
            handleSubmitSupporter();
          }}
        >
          Add Supporter
        </Button>
      </View>
          
      <Text style={styles.text}>Encouragement from your Trybe</Text>
        <FlatList
            data={messages}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Card style={styles.cardStyle}>
                <Card.Content>
                  <Text>{item.message}</Text>
                </Card.Content>
              </Card>
            )}
            ListFooterComponent={() => (
              <View style={{padding: 190}}></View>
        )}
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
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    textAlign: "center",
    padding: 10
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
  update: {
    marginBottom: 20,
  },
});

export default GoalDetailScreen;
