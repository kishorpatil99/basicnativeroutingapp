import { Button, Text, TextInput, View } from "react-native";
import React, { Component, useEffect, useState } from "react";

export default function Page1({ navigation }) {
  const [text, setText] = useState();

  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <View>
      <Text>Page1</Text>
      <TextInput
        onChangeText={(text) => setText(text)}
        style={{ backgroundColor: "grey", width: 150, margin: 20 }}
      />
      <Button
        onPress={() => navigation.navigate("Page2", { text })}
        title="to page2"
      />
    </View>
  );
}
