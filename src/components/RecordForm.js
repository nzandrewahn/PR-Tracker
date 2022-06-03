import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const RecordForm = ({onSubmit, initialState}) => {
  const [records, setRecords] = useState(initialState);

  return (
    <View>
      <Text style={styles.title}>Squat: </Text>
      <TextInput
        style={styles.input}
        placeholder="Squat"
        value={records.squat}
        onChangeText={(value) => setRecords({ ...records, squat: value })}
      />

      <Text style={styles.title}>Bench: </Text>
      <TextInput
        style={styles.input}
        placeholder="Bench"
        value={records.bench}
        onChangeText={(value) => setRecords({ ...records, bench: value })}
      />

      <Text style={styles.title}>Deadlift: </Text>
      <TextInput style={styles.input} placeholder="Deadlift" 
        value={records.deadlift}
        onChangeText={(value) => setRecords({ ...records, deadlift: value })}
      />

      <Button title="Save Entry" onPress={() => onSubmit(records.squat, records.bench, records.deadlift)}/> 
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginLeft: 20,
    marginVertical: 10,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "grey",
    padding: 5,
    marginHorizontal: 20,
    fontSize: 18,
  },
});

RecordForm.defaultProps = {
  initialState: { bench: '', squat: '', deadlift: ''}
}


export default RecordForm;
