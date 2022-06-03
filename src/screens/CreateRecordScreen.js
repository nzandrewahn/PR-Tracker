import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RecordForm from '../components/RecordForm';
import { Context as RecordContext } from "../context/PRContext";
 

const CreateRecord = ({navigation}) => {
    const {addRecord} = useContext(RecordContext);
    return (
        <View>
            <RecordForm onSubmit = {(squat, bench, deadlift) => {
                addRecord(squat, bench, deadlift, () => navigation.pop())
            }}/>
        </View>
    );
}

export default CreateRecord;