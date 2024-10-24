import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { RestaurantsItem } from "./item";

export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}

export function RestaurantesList() {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);

  useEffect(() => {
    async function getRestaurants() {
      const response = await fetch("http://192.168.171.143:3000/restaurants");
      const data = await response.json();
      setRestaurants(data);
    }
    getRestaurants();
  }, []);

  return (
    <View className="px-4 w-full h-full flex-1 mb-11 gap-4">
      {restaurants.map((item) => (
        <RestaurantsItem item={item} key={item.id} />
      ))}
    </View>
  );
}
