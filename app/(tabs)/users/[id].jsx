import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function usersPage() {
  //guardo en una constante el id
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>User: {id}</Text>
    </View>
  );
}
