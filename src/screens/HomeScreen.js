import React, { useContext } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Context as PRContext } from "../context/PRContext";
import { Feather } from "@expo/vector-icons";
import RecordCard from "../components/RecordCard";

const HomeScreen = ({ navigation }) => {
  const { state, addRecord } = useContext(PRContext);

  if (!state.length) {
    return <View style={{alignItems:'center', justifyContent: 'center', flex: 1, marginTop: -50}}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Add a Record</Text>
    </View>
  }

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(state) => state.id}
        renderItem={({ item }) => {
          return (
            <RecordCard
              onPress={() => navigation.navigate("Show", { id: item.id })}
              record={{
                date: item.date,
                squat: item.squat,
                bench: item.bench,
                deadlift: item.deadlift,
              }}
            />
          );
        }}
      />
    </View>
  );
};

HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus-circle" size={25} style={{ marginRight: 15 }} />
      </TouchableOpacity>
    ),
  };
};

export default HomeScreen;
