import React, { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import styles from "./ViewGoals.component.style";

function ViewGoals(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://trybe-backend.herokuapp.com/goals")
      .then((Response) => Response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
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
