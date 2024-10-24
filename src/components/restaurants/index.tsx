import { View, Text, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { RestaurantsItem } from "./branches";

export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}

export function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function getRestaurants() {
      const response = await fetch("http://192.168.171.143:3000/restaurants");
      const data = await response.json();
      setRestaurants(data);
    }
    getRestaurants();
  }, []);

  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantsItem item={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
