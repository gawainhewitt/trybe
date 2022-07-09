import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";

import registerUser from "../functions/registerUser";
import loginUser from "../functions/loginUser";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUserInfo] = useState({});

  const register = async (handle, password) => {
    const user = await registerUser(handle, password);
    setUserInfo(user);
    AsyncStorage.setItem("user", JSON.stringify(user));
  };

  const login = async (handle, password) => {
    const user = await loginUser(handle, password);
    setUserInfo(user);
    AsyncStorage.mergeItem("user", JSON.stringify(user));
  };

  const logout = () => {
    AsyncStorage.removeItem("user");
    setUserInfo({});
  };

  const isLoggedIn = async () => {
    try {
      let user = await AsyncStorage.getItem("user");
      user = JSON.parse(user);
      if (user) {
        console.log("user in store", user);
        setUserInfo(user);
      }
    } catch (e) {
      console.log(`not logged in ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
