import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Picker,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// You can import styles, icons, or any other components you need here

const RoomSurvey = ({ onChange, setRoomSurveyData }) => {
  const fields = [
    "Condensation",
    "Damp",
    "Evidence of Mould",
    "Humidity",
    "Windows",
    "Ceiling",
    "Bay",
    "Anywhere Else",
  ];

  const rooms = [
    "Lounge",
    "Kitchen",
    "Utility",
    "Bath",
    "Bedroom 1",
    "Bedroom 2",
    "Bedroom 3",
    "Bedroom 4",
    "Bedroom 5",
    "Hall",
    "Other",
  ];

  const [room, setRoom] = useState("");
  const [formData, setFormData] = useState({});
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    if (onChange) {
      onChange("roomSurveyData", roomData);
    }
  }, [roomData]);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const updatedRoomData = roomData.map((r) =>
      r.room === room ? { room, data: formData } : r
    );
    if (!updatedRoomData.find((r) => r.room === room)) {
      updatedRoomData.push({ room, data: formData });
    }
    setRoomData(updatedRoomData);
    setFormData({});
    setRoom(null);
  };

  //   const handleSubmit = () => {
  //     const updatedRoomData = roomData.map((r) =>
  //       r.room === room ? { room, data: formData } : r
  //     );
  //     if (!updatedRoomData.find((r) => r.room === room)) {
  //       updatedRoomData.push({ room, data: formData });
  //     }
  //     setRoomData(updatedRoomData);
  //     setFormData({});
  //     setRoom(null);
  //     setRoomSurveyData(updatedRoomData);
  //   };

  const handleEdit = (index) => {
    setRoom(roomData[index].room);
    setFormData(roomData[index].data);
  };

  const handleDelete = (index) => {
    const newRoomData = roomData.filter((_, idx) => idx !== index);
    setRoomData(newRoomData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Room Survey</Text>
      <View style={styles.form}>
        <Picker
          selectedValue={room}
          onValueChange={(itemValue) => setRoom(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select a room" value={null} />
          {rooms.map((option, index) => (
            <Picker.Item key={index} label={option} value={option} />
          ))}
        </Picker>
        {room && (
          <>
            {fields.map((field, index) => (
              <View key={index} style={styles.formRow}>
                <Text style={styles.formLabel}>{field}</Text>
                <TextInput
                  style={styles.formInput}
                  onChangeText={(value) => handleChange(field, value)}
                  value={formData[field] ?? ""}
                />
              </View>
            ))}
            <TouchableOpacity onPress={handleSubmit} style={styles.formButton}>
              <Text style={styles.formButtonText}>Submit</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      <ScrollView horizontal>
        <View>
          <View style={styles.tableHeader}>
            <View style={styles.attributeHeader}>
              <Text style={styles.attributeTitle}>Attribute</Text>
            </View>
            {roomData.map((item, index) => (
              <View key={index} style={styles.roomHeader}>
                <Text style={styles.roomName}>{item.room}</Text>
              </View>
            ))}
          </View>
          {fields.concat("Actions").map((field, index) => (
            <View key={index} style={{ flexDirection: "row" }}>
              <View style={styles.attributeHeader}>
                <Text>{field}</Text>
              </View>
              {roomData.map((item, idx) => (
                <View key={idx} style={styles.cell}>
                  {field === "Actions" ? (
                    <View style={styles.iconContainer}>
                      {/* Edit and Delete Icons */}
                      <TouchableOpacity onPress={() => handleEdit(idx)}>
                        <Text>Edit</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleDelete(idx)}>
                        <Text>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <Text>
                      {item.data.hasOwnProperty(field) ? item.data[field] : ""}
                    </Text>
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f7f7f7",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  picker: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  formRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  formLabel: {
    flex: 2,
    fontSize: 18,
  },
  formInput: {
    flex: 3,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  formButton: {
    backgroundColor: "#3498db",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  formButtonText: {
    color: "white",
    fontSize: 18,
  },
  tableHeader: {
    flexDirection: "row",
  },
  attributeHeader: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#e7e7e7",
    width: 120,
  },
  attributeTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  roomHeader: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    width: 120,
  },
  roomName: {
    textAlign: "center",
  },
  cell: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    width: 120,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

export default RoomSurvey;
