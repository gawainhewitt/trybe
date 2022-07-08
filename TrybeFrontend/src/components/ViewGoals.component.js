import React, { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import styles from "./ViewGoals.component.style";
import fetchGoals from "../functions/fetchGoals";
import { loadGoals } from "../../store/goals/goals.actions";
import { useDispatch, useSelector } from 'react-redux';


function ViewGoals(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  let goals = useSelector(state => state.goals);

  useEffect(() => {
    async function load() {
      await dispatch(loadGoals());
      setLoading(false)
    }
    load()
  }, [goals, dispatch]);

  const clickedItem = (data) => {
    props.navigation.navigate("Goal", { data: data });
  };

  return (
    <View style={styles.wrapper}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={goals}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text style={styles.goal} onPress={() => clickedItem(item)}>
              {item.id + ". " + item.goal_description}
            </Text>
          )}
        />
      )}
    </View>
  );
}

export default ViewGoals;
