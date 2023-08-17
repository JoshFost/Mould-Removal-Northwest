// import React, { useState } from "react";
// import react from "react";
// import { View, TextInput, Text, Button } from "react-native";
// import { initialQuote } from "../components/quoteStructure";
// import { addQuote } from "../config/firestoreService";

// const NewQuote = ({ navigation }) => {
//   const [quote, setQuote] = useState(initialQuote);
//   console.log("Initialized Quote:", quote);

//   const handleChange = (section, field, value) => {
//     setQuote((prevState) => ({
//       ...prevState,
//       [section]: {
//         ...prevState[section],
//         [field]: value,
//       },
//     }));
//   };

//   const handleSubmit = async () => {
//     await addQuote(quote);
//     navigation.goBack(); // or navigate to a confirmation screen or the dashboard
//   };

//   return (
//     <View>
//       <TextInput>This is the new quote screen</TextInput>
//       {/* <TextInput
//         placeholder="Name"
//         value={quote.customerDetails.name}
//         onChangeText={(value) => handleChange("customerDetails", "name", value)}
//       /> */}
//       <TextInput
//         placeholder="Name"
//         value="Test Name"
//         onChangeText={(value) => handleChange("customerDetails", "name", value)}
//       />

//       <Button title="Save Quote" onPress={handleSubmit} />
//     </View>
//   );
// };

// export default NewQuote;
