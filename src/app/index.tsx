import { Text, View, ScrollView } from "react-native";
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { RestaurantesList } from "../components/restaurantesList";

import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView>
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />

        <Banner />

        <Search />
      </View>
      <Section
        name="Comidas em alta"
        size="text-2xl"
        label="Ver mais"
        action={() => console.log("CLicou no botão ver mais")}
      />
      <TrendingFoods />

      <Section
        name="Famosos no Mata Fome"
        size="text-xl"
        label="Ver mais"
        action={() => console.log("CLicou no botão Famosos")}
      />
      <Restaurants />

      <Section
        name="Restaurantes"
        size="text-xl"
        label="Ver todos"
        action={() => console.log("CLicou nos restaurantes")}
      />

      <RestaurantesList />
    </ScrollView>
  );
}
