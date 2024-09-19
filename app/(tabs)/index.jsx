import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View>
      <Text>index</Text>

      <Link href="/users/1">
        <Text>Go to user 1</Text>
      </Link>
      <Link href="/users/2">
        <Text>Go to user 2</Text>
      </Link>
    </View>
  );
};

export default index;
