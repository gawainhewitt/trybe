import { Alert } from "react-native";

export const createAlert = (title, msg) => {
  Alert.alert(title, msg, [{ text: "OK" }]);
};
