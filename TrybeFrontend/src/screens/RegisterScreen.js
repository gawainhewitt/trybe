import React, { useContext, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { AuthContext } from "../context/AuthContext";
import Logo from "../components/Logo";
import { createAlert } from "../functions/createAlert";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const { register } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter email"
          onChangeText={(text) => setEmail(text)}
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
            if(email === null){
              createAlert("Error!", "email field cannot be empty");
            }else if(password === null){
              createAlert("Error!", "password field cannot be empty");
            }else{
              register(email, password);
            }
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
