import React from "react";
import { Stack } from "expo-router";

export default function stack() {
  //Creo un layout que sirve para moverme entre mis screens
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
