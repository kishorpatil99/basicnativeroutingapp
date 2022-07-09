import { Button, Text, View } from "react-native";
import React, { Component } from "react";

export default function Page2({ data, navigation }) {
  return (
    <View>
      <Text>Page2</Text>
      <Text>{data.params}</Text>
      <Button onPress={() => navigation.navigate("Page1")} title="to page1" />
    </View>
  );
}
