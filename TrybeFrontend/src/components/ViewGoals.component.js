import React, { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import styles from "./ViewGoals.component.style";
import { loadGoals } from "../../store/goals/goals.actions";
import { useDispatch, useSelector } from "react-redux";

function ViewGoals(props) {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  let goals = useSelector((state) => state.goals);

  useEffect(() => {
    async function load() {
      await dispatch(loadGoals());
      setLoading(false);
    }
    load();
  }, [dispatch]);

  const clickedItem = (id) => {
    props.navigation.navigate("Goal", { id: id });
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
            <Text style={styles.goal} onPress={() => clickedItem(item.id)}>
              {item.id + ". " + item.goal_description}
            </Text>
          )}
        />
      )}
    </View>
  );
}

export default ViewGoals;
