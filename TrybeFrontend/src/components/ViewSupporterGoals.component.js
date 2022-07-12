import React, { useEffect, useState, useContext } from "react";
import { FlatList, View, Text } from "react-native";
import styles from "./ViewGoals.component.style";
import { supporterLoadGoals } from "../../store/goals/supporterGoals.actions";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-native-paper";

import { AuthContext } from "../context/AuthContext";

function ViewGoals(props) {
  const { user } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  let supporterGoals = useSelector((state) => state.supporterGoals);
  

  useEffect(() => {
    async function load() {
      await dispatch(supporterLoadGoals(user.id));
      setLoading(false);
    }
    load();
  }, [dispatch]);

  const clickedItem = (id) => {
    props.navigation.navigate("GoalDetailScreen", { id: id });
  };

  return (
    <View style={styles.wrapper}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={supporterGoals}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Card style={styles.cardStyle} onPress={() => clickedItem(item.id)}>
              <Card.Content>
                <Text>{item.goal_description}</Text>
              </Card.Content>
            </Card>
          )}
        />
      )}
    </View>
  );
}

export default ViewGoals;
