import React, {useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import {Context as RecordContext} from '../context/PRContext';
import {Feather} from '@expo/vector-icons'

const ShowRecordScreen = ({navigation}) => {

    const {state, deleteRecord} = useContext(RecordContext);
    const id = navigation.getParam('id');
    const record = state.find((record) => record.id === id);

    //show the record 
    //and enable edit 
    if(!record) {
        return null;
    }

    return (
        <View style={{margin: 20}}>
            <Text style={styles.date}>Date: {record.date}</Text>
            <Text style={styles.text}>Squat: {record.squat}</Text>
            <Text style={styles.text}>Bench: {record.bench}</Text>
            <Text style={styles.text}>Deadlift: {record.deadlift}</Text>
            <Button title="Delete Record" onPress={() => deleteRecord(id, () => navigation.navigate('Home'))} />
        </View>
    );
}

ShowRecordScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
                <Feather name="edit" size={25} style={{marginRight: 10}}/>
            </TouchableOpacity>
        )
    }
} 


const styles = StyleSheet.create({
    date: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      text: {
        fontSize: 18,
      },
})


export default ShowRecordScreen;