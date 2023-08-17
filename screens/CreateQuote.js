import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { initialQuote } from "../components/QuoteStructure";
import { useState } from "react";
import { ScrollView } from "react-native-web";
import { addQuote } from "../config/firestoreService";
import CustomerDetails from "../components/CustomerDetails";
import PropertyDetails from "../components/PropertyDetails";
import RoomSurvey from "../components/RoomSurvey";

const CreateQuote = ({ navigation }) => {
  const [quote, setQuote] = useState(initialQuote);

  // const handleChange = (section, field, value) => {
  //   setQuote((prevState) => ({
  //     ...prevState,
  //     [section]: {
  //       ...prevState[section],
  //       [field]: value,
  //     },
  //   }));
  // };

  const handleChange = (section, dataOrField, value) => {
    if (typeof dataOrField === "object") {
      // Handle entire section update (used by RoomSurvey)
      setQuote((prevState) => ({
        ...prevState,
        [section]: dataOrField,
      }));
    } else {
      // Handle individual field updates (used by CustomerDetails and PropertyDetails)
      setQuote((prevState) => ({
        ...prevState,
        [section]: {
          ...prevState[section],
          [dataOrField]: value,
        },
      }));
    }
  };

  const handleSubmit = async () => {
    await addQuote(quote);
    navigation.goBack();
  };

  return (
    <ScrollView>
      <CustomerDetails
        data={quote.customerDetails}
        onChange={handleChange}
        navigation={navigation}
      />
      <PropertyDetails
        data={quote.propertyDetails}
        onChange={handleChange}
        navigation={navigation}
      />
      <RoomSurvey
        data={quote.roomSurveyData}
        onChange={handleChange}
        navigation={navigation}
      />
      <Button title="Save and go back" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = {};

export default CreateQuote;
