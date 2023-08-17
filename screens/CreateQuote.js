import React from "react";
import { View, Text, Button } from "react-native";

const CreateQuote = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Create quote screen</Text>
      <Button title="Save and go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default CreateQuote;
