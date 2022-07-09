import { Button, Text, View } from "react-native";
import React, { Component } from "react";

export default function Page2({ route, navigation }) {
  console.log(route.params.text);
  return (
    <View>
      <Text>Page2</Text>
      <Text>{route.params.text}</Text>
      <Button onPress={() => navigation.navigate("Page1")} title="to page1" />
    </View>
  );
}
