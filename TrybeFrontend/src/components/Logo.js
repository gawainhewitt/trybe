import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Title } from "react-native-paper";

function Logo() {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>TryBe</Title>
      <Image
        style={styles.logo}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/f/f8/01_Icon-Community%402x.png",
        }}
      />
    </View>
  );
}

export default Logo;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 32,
  },
  container: {
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 30,
    marginBottom: 50,
  },
});
