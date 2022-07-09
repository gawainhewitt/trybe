// import React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";

function NavigationBar({ navigation, back }) {
  return (
    <Appbar.Header style={styles.header}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="TryBe" style={styles.title} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  // header: {
  //   backgroundColor: "#43aa8b",
  // },
  title: {
    fontSize: 50,
  },
});

export default NavigationBar;
