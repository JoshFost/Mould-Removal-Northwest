import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard";
import CreateQuote from "../screens/CreateQuote";
import EditQuote from "../screens/EditQuote";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="CreateQuote" component={CreateQuote} />
      <Stack.Screen name="EditQuote" component={EditQuote} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
