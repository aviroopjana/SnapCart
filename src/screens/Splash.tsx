import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login' as never);
    }, 3000);
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <Image
        source={require("../images/logo.jpg")}
        className="h-[170px] w-[170px] rounded-2xl"
      />
      <Text className="mt-8 text-xl font-semibold text-blue-900">
        SNAP . SHOP . SMILE :)
      </Text>
      <View className="absolute bottom-0 mb-5 items-center w-full">
        <Text className="text-center">
          Designed and Developed by Aviroop Jana
        </Text>
      </View>
    </View>
  );
};

export default Splash;
