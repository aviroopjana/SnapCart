import { View, Text, Image, Pressable, TextInput } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
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
          Create New Account
        </Text>
        <View className="flex flex-row items-center bg-slate-200 rounded-xl mt-10 w-10/12">
          <Image
            source={require("../images/user.png")}
            className="h-[26px] w-[28px] absolute ml-3"
          />
          <TextInput
            placeholder="Enter Your Name"
            className="h-10 pl-[54px] bg-transparent w-full"
          />
        </View>
        <View className="flex flex-row items-center bg-slate-200 rounded-xl mt-4 w-10/12">
          <Image
            source={require("../images/mail.png")}
            className="h-[28px] w-[28px] absolute ml-3"
          />
          <TextInput
            placeholder="Enter Email Id"
            className="h-10 pl-[54px] bg-transparent w-full"
          />
        </View>
        <View className="flex flex-row items-center bg-slate-200 rounded-xl mt-4 w-10/12">
          <Image
            source={require("../images/mobile-phone.png")}
            className="h-[28px] w-[28px] absolute ml-3"
          />
          <TextInput
            placeholder="Enter Phone Number"
            className="h-10 pl-[54px] bg-transparent w-full"
          />
        </View>
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
        <View className="flex flex-row items-center bg-slate-200 rounded-xl mt-4 w-10/12">
          <Image
            source={require("../images/lock.png")}
            className="h-[28px] w-[28px] absolute ml-3"
          />
          <TextInput
            placeholder="Confirm Password"
            className="h-10 pl-[54px] bg-transparent w-full"
            secureTextEntry={true}
          />
        </View>
        <Pressable className="p-2 bg-[#032457] h-12 w-10/12 mt-14 rounded-xl">
          <Text className="text-white h-10 text-center font-semibold text-lg">
            Register
          </Text>
        </Pressable>
        <Text
          className="mt-4 text-base text-[#032457] font-medium"
          onPress={() => {
            navigation.navigate('Login' as never);
          }}
        >
          Already have an account?
        </Text>
      </View>
    </LinearGradient>
  );
};

export default Signup;
