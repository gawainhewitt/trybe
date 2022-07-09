import React, { useContext, useState } from "react";
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import Logo from "../components/Logo";

const LoginScreen = ({ navigation }) => {
  const [handle, setHandle] = useState(null);
  const [password, setPassword] = useState(null);
  const { login } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
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
          title="Login"
          onPress={() => {
            login(handle, password);
          }}
        />

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
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

export default LoginScreen;
