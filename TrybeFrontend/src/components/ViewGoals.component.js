import React, { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import styles from "./ViewGoals.component.style";
import fetchGoals from "../functions/fetchGoals";

function ViewGoals(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getGoals = async () => { 
      await fetchGoals();
      setLoading(false)
    }
    getGoals();
  }, [props]);

  const clickedItem = (data) => {
    props.navigation.navigate("Goal", { data: data });
  };

  return (
    <View style={styles.wrapper}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
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
