import React, { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import styles from "./ViewGoals.component.style";
import fetchGoals from "../functions/fetchGoals";
import { loadGoals } from "../../store/goals/goals.actions";
import { useDispatch, useSelector } from 'react-redux';


function ViewGoals(props) {
  console.log("how many times being called?");
  const dispatch = useDispatch();
  let goals = useSelector(state => state.goals);

  useEffect(() => {
    async function load() {
      console.log('in useEffect');
      await dispatch(loadGoals());
    }
    load()
  }, [dispatch]);

  const clickedItem = (data) => {
    props.navigation.navigate("Goal", { data: data });
  };

  // for fake backend

  return (
    <View style={styles.wrapper}>
      {/* {isLoading ? (
        <Text>Loading...</Text>
      ) : ( */}
        <FlatList
          data={goals}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text style={styles.goal} onPress={() => clickedItem(item)}>
              {item.id + ". " + item.title}
            </Text>
          )}
        />
      {/* )} */}
    </View>
  );

  // return (
  //   <View style={styles.wrapper}>
  //     {isLoading ? (
  //       <Text>Loading...</Text>
  //     ) : (
  //       <FlatList
  //         data={goals}
  //         keyExtractor={({ id }, index) => id}
  //         renderItem={({ item }) => (
  //           <Text style={styles.goal} onPress={() => clickedItem(item)}>
  //             {item.id + ". " + item.goal_description}
  //           </Text>
  //         )}
  //       />
  //     )}
  //   </View>
  // );
}

export default ViewGoals;
