import { View, Image, Text, TextInput, Pressable } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

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
        <View className="flex flex-row items-center bg-slate-200 rounded-xl mt-10 w-9/12">
          <Image
            source={require("../images/mail.png")}
            className="h-[30px] w-[30px] absolute ml-3"
          />
          <TextInput
            placeholder="Enter Email Id"
            className="h-10 pl-[54px] bg-transparent w-full"
          />
        </View>
        <View className="flex flex-row items-center bg-slate-200 rounded-xl mt-4 w-9/12">
          <Image
            source={require("../images/lock.png")}
            className="h-[30px] w-[30px] absolute ml-3"
          />
          <TextInput
            placeholder="Enter Password"
            className="h-10 pl-[54px] bg-transparent w-full"
            secureTextEntry={true}
          />
        </View>
        <Pressable className="p-4 bg-[#6ee9ef] h-12 w-9/12 mt-14 rounded-xl">
          <Text className="text-[#032457] h-10 text-center font-semibold">
            Login
          </Text>
        </Pressable>
        <Text
          className="mt-4 text-lg text-[#032457] font-medium"
          onPress={() => {
            navigation.navigate('Signup' as never);
          }}
        >
          Create New Account?
        </Text>
      </View>
    </LinearGradient>
  );
};

export default Login;
