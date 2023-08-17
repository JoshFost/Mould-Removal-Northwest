const rooms = [
  "Living Room",
  "Bedroom 1",
  "Bedroom 2",
  "Bedroom 3",
  "Bedroom 4",
  "Bedroom 5",
  "Kitchen",
  "Bathroom",
  "Other",
]; // Add or remove as required

export const initialQuote = {
  customerDetails: {
    name: "",
    addressLine1: "",
    addressLine2: "",
    town: "",
    county: "",
    postcode: "",
    mobileNumber: "",
    email: "",
  },
  propertyDetails: {
    propertyType: "",
    terracedType: "",
    wallWidth: "",
    wallType: "",
    notes: "",
  },
  roomSurveyData: Object.fromEntries(
    rooms.map((room) => [
      room,
      {
        Condensation: "",
        Damp: "",
        "Evidence of Mould": "",
        Humidity: "",
        Windows: "",
        Ceiling: "",
        Bay: "",
        "Anywhere Else": "",
      },
    ])
  ),
  yesNosData: {}, // We will populate this with the YesNoQuestions later
  additionalInfoData: {
    1: { selectedOptions: [] },
    2: { selectedOptions: [] },
    3: { selectedOptions: [] },
    4: { selectedOptions: [] },
    5: { selectedOptions: [] },
  },
};

// export default initialQuote;
