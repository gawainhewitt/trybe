import React, { useContext, useState } from "react";
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
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
          title="Register"
          onPress={() => {
            register(handle, password);
            navigation.navigate("Login");
          }}
        />

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
