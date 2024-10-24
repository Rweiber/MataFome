import { View, Pressable, Text } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export function Header() {
  return (
    <View className="w-full flex flex-row items-center justify-between">
      <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
        <Ionicons name="menu" size={24} color="#121212" />
      </Pressable>
      <Text className=" text-stone-900 font-bold text-lg">Mata Fome</Text>
      <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
        <Feather name="bell" size={24} color="#121212" />
      </Pressable>
    </View>
  );
}
