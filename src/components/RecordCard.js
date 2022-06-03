import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const RecordCard = ({ onPress, record }) => {

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={styles.container}>
        <View>
          <View style={styles.date}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Date: {record.date}
            </Text>
          </View>
          <Text style={styles.text}>Squat: {record.squat} kg</Text>
          <Text style={styles.text}>Bench: {record.bench} kg</Text>
          <Text style={styles.text}>Deadlift: {record.deadlift} kg</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: "grey",
    backgroundColor: "lightblue",
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 5,
    paddingVertical: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    paddingBottom: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "darkgrey",
  },
  text: {
    fontSize: 18,
  },
});

export default RecordCard;
