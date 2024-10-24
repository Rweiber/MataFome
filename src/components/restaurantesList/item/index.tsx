import { View, Pressable, Image, Text } from "react-native";
import { RestaurantsProps } from "..";
import { Ionicons } from "@expo/vector-icons";

export function RestaurantsItem({ item }: { item: RestaurantsProps }) {
  return (
    <Pressable className="flex flex-row items-center justify-start gap-2">
      <Image className="w-20 h-20 rounded-full" source={{ uri: item.image }} />
      <View className="flex gap-2">
        <Text
          className="text-base text-black leading-4 font-bold"
          numberOfLines={2}
        >
          {item.name}
        </Text>
        <View>
          <Ionicons name="star" size={14} color="#ca8a04" />
          <Text className="text-sm">4.5</Text>
        </View>
      </View>
    </Pressable>
  );
}
