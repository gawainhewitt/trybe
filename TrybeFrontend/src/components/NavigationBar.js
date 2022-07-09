import React, { useContext } from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";

function NavigationBar({ navigation, back }) {
  const { logout } = useContext(AuthContext);
  return (
    <Appbar.Header style={styles.header}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="TryBe" style={styles.title} />
      <Appbar.Action icon="logout" onPress={logout} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
  },
});

export default NavigationBar;
