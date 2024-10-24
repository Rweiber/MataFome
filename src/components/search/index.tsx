import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export function Search() {
  return (
    <View className="w-full flex-row items-center gap-2 border border-slate-500 rounded-full px-4 h-14">
      <Feather name="search" size={20} color="#64748b" />

      <TextInput
        placeholder="O que deseja comer?"
        className="w-full flex-1 h-full bg-transparent"
      />
    </View>
  );
}
