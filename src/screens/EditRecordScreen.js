import React, { useContext } from "react";
import { View, Text, Stylesheet } from "react-native";
import RecordForm from "../components/RecordForm";
import { Context as RecordContext } from "../context/PRContext";

const EditRecordScreen = ({ navigation }) => {
  const { state, editRecord} = useContext(RecordContext);

  const id = navigation.getParam("id");
  const record = state.find((record) => record.id === id);

  return (
    <View>
      <RecordForm
        initialState={{
          bench: record.bench,
          squat: record.squat,
          deadlift: record.deadlift,
        }}
        onSubmit={(bench, squat, deadlift) => {
            editRecord(id, bench, squat, deadlift, () => navigation.pop())
        }}
      />
    </View>
  );
};

export default EditRecordScreen;
