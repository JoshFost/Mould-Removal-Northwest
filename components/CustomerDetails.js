// CustomerDetails.js
import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { initialQuote } from "./QuoteStructure";
// import { useState } from "react";

const CustomerDetails = ({ navigation, data, onChange }) => {
  // const [quote, setQuote] = useState(initialQuote);
  // Simplified handleChange function for this component
  const handleChange = (field, value) => {
    onChange("customerDetails", field, value);
  };

  return (
    <View>
      <Text style={styles.title}>Customer Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={data.name}
        onChangeText={(value) => handleChange("name", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address Line 1"
        value={data.addressLine1}
        onChangeText={(value) => handleChange("addressLine1", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address Line 2"
        value={data.addressLine2}
        onChangeText={(value) => handleChange("addressLine2", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Town/City"
        value={data.town}
        onChangeText={(value) => handleChange("town", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="County/State/Province"
        value={data.county}
        onChangeText={(value) => handleChange("county", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Postcode"
        value={data.postcode}
        onChangeText={(value) => handleChange("postcode", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={data.mobileNumber}
        onChangeText={(value) => handleChange("mobileNumber", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={data.email}
        onChangeText={(value) => handleChange("email", value)}
      />
      {/* 
      <Button title="Save and go back" onPress={handleSubmit} /> */}
    </View>
  );
};

const styles = {
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    width: 300,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
};

export default CustomerDetails;
