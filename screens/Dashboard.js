import React from "react";
import { View, Text, Button } from "react-native";
import NewQuote from "./NewQuote";

const Dashboard = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Dashboard Screen</Text>
      <Button
        title="Create New Quote"
        onPress={() => navigation.navigate("CreateQuote")}
      />
    </View>
  );
};

export default Dashboard;
