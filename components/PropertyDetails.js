import React from "react";
import {
  View,
  Text,
  TextInput,
  Picker,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const PropertyDetails = ({ data, onChange }) => {
  const handleChange = (field, value) => {
    onChange("propertyDetails", field, value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Property Details</Text>
      <ScrollView>
        <Text style={styles.label}>Property Type:</Text>
        <Picker
          selectedValue={data.propertyType}
          style={styles.picker}
          onValueChange={(value) => handleChange("propertyType", value)}
        >
          <Picker.Item label="..." />
          <Picker.Item label="House - Semi Detached" value="house_semi" />
          <Picker.Item label="House - Terraced" value="house_terraced" />
          <Picker.Item label="Detached House" value="detached_house" />
          <Picker.Item label="Bungalow - Semi" value="bungalow_semi" />
          <Picker.Item label="Bungalow - Detached" value="bungalow_detached" />
          <Picker.Item label="Bungalow - Terraced" value="bungalow_terraced" />
          <Picker.Item label="Flat - With Loft Space" value="flat_loft" />
          <Picker.Item label="Flat - Without Loft Space" value="flat_no_loft" />
        </Picker>

        {data.propertyType.includes("terraced") && (
          <>
            <Text style={styles.label}>Terraced Type:</Text>
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={[
                  styles.customButton,
                  data.terracedType === "mid" && styles.selectedButton,
                ]}
                onPress={() => handleChange("terracedType", "mid")}
              >
                <Text style={styles.buttonText}>Mid</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.customButton,
                  data.terracedType === "end" && styles.selectedButton,
                ]}
                onPress={() => handleChange("terracedType", "end")}
              >
                <Text style={styles.buttonText}>End</Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        <TextInput
          style={styles.input}
          placeholder="Wall Width"
          value={data.wallWidth}
          onChangeText={(value) => handleChange("wallWidth", value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Wall Type"
          value={data.wallType}
          onChangeText={(value) => handleChange("wallType", value)}
        />
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={4}
          placeholder="Notes"
          value={data.notes}
          onChangeText={(value) => handleChange("notes", value)}
        />
      </ScrollView>
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

export default PropertyDetails;
