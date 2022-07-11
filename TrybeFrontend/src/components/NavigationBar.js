import React, { useContext } from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";

function NavigationBar({ navigation, back }) {
  const { user } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  return (
    <Appbar.Header style={styles.header}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Trybe" style={styles.title} />
      {user ? <Appbar.Action icon="logout" onPress={logout} /> : null}
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
  },
});

export default NavigationBar;
