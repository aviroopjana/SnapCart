import {
  View,
  Image,
  Text,
  TextInput,
  Pressable,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import React, { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Feather from 'react-native-vector-icons/Feather';
import Error from 'react-native-vector-icons/MaterialIcons';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState<String | undefined>();
  const [verifyEmail, setVerifyEmail] = useState<boolean>();
  const [password, setPassword] = useState<String>();
  const [verifyPassword, setVerifyPassword] = useState<boolean>();

  const handleEmail = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const emailVar = e.nativeEvent.text;
    setEmail(emailVar);
    setVerifyEmail(false);
    if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar)) {
      setEmail(emailVar);
      setVerifyEmail(true);
    }
  };

  return (
    <LinearGradient
      colors={["#468df5", "#6ee9ef"]}
      className="absolute inset-0 h-full w-full"
    >
      <View className="inset-0 flex-1 items-center mt-10">
        <Image
          source={require("../images/logo.jpg")}
          className="h-[150px] w-[150px] rounded-full"
        />
        <Text className="text-xl font-medium text-white mt-10">
          Welcome Back, Login
        </Text>
        <View className="flex flex-row items-center bg-slate-200 rounded-xl mt-10 w-10/12">
          <Image
            source={require("../images/mail.png")}
            className="h-[28px] w-[28px] absolute ml-3"
          />
          <TextInput
            placeholder="Enter Email Id"
            className="h-10 pl-[54px] bg-transparent w-full "
            onChange={(e) => handleEmail(e)}
          />
          {email?.length < 1 ? null : verifyEmail ? (
            <Feather name="check_circle" color="green" size={20} />
          ): ( <Error name="error" color="red" size={20} />)}
        </View>
        {email?.length < 1 ? null : verifyEmail ? null : (
            <Text className="ml-[20px] mt-1 text-red-700">
              Enter Proper Email Address
            </Text>
          )}
        <View className="flex flex-row items-center bg-slate-200 rounded-xl mt-4 w-10/12">
          <Image
            source={require("../images/lock.png")}
            className="h-[28px] w-[28px] absolute ml-3"
          />
          <TextInput
            placeholder="Enter Password"
            className="h-10 pl-[54px] bg-transparent w-full"
            secureTextEntry={true}
          />
        </View>
        <Pressable className="p-2 bg-[#032457] h-12 w-10/12 mt-14 rounded-xl">
          <Text className="text-white h-10 text-center font-semibold text-lg">
            Login
          </Text>
        </Pressable>
        <Text
          className="mt-4 text-sm text-[#032457] font-medium"
          onPress={() => {
            navigation.navigate("Signup" as never);
          }}
        >
          Create New Account?
        </Text>
      </View>
    </LinearGradient>
  );
};

export default Login;
