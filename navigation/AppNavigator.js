import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard";
import CreateQuote from "../screens/CreateQuote";
import EditQuote from "../screens/EditQuote";
import NewQuote from "../screens/NewQuote";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="CreateQuote" component={CreateQuote} />
      <Stack.Screen name="EditQuote" component={EditQuote} />
      {/* <Stack.Screen name="NewQuote" component={NewQuote} /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
