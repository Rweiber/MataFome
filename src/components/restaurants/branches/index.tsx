import { View, Pressable, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsProps } from "..";

export function RestaurantsItem({ item }: { item: RestaurantsProps }) {
  return (
    <Pressable
      className="flex flex-col items-center justify-center"
      onPress={() => console.log("Clicou no restaurante" + item.name)}
    >
      <Image className="w-20 h-20 rounded-full" source={{ uri: item.image }} />

      <Text
        className="text-ls mt-2 w-21 text-center leading-4 text-black"
        numberOfLines={2}
      >
        {item.name}
      </Text>
    </Pressable>
  );
}
