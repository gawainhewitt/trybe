import React, { useContext, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { AuthContext } from "../context/AuthContext";
import Logo from "../components/Logo";

const RegisterScreen = ({ navigation }) => {
  const [handle, setHandle] = useState(null);
  const [password, setPassword] = useState(null);

  const { register } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={handle}
          placeholder="Enter handle"
          onChangeText={(text) => setHandle(text)}
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        <Button
          mode="contained"
          icon="account-plus"
          onPress={() => {
            register(handle, password);
            navigation.navigate("Login");
          }}
        >
          Register
        </Button>

        <View style={styles.register}>
          <Text>Already have an account? </Text>
          <Button
            icon="account-circle"
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  register: {
    alignItems: "center",
    marginTop: 40,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "80%",
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: "blue",
  },
});

export default RegisterScreen;
