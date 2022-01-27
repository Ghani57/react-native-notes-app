import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import React, {useEffect, useState} from 'react';
import { TextInput } from 'react-native-paper';
import {MyNotes} from '../features/appslice'
import {useDispatch} from 'react-redux';


const SecondScreen = ({navigation}) => {

  const [notes, setNotes] = useState('')
  const [title, setTitle] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  const dispatch = useDispatch()


  const AddNote = () => {

    let date = new Date().getDate(); //Current Date
    let month = new Date().getMonth() + 1; //Current Month
    let year = new Date().getFullYear(); //Current Year
    let hours = new Date().getHours(); //Current Hours
    let min = new Date().getMinutes(); //Current Minutes
    let sec = new Date().getSeconds(); //Current Seconds

    let currentDateAndTime = date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec

    setCurrentDate(currentDateAndTime);

    dispatch(
      MyNotes({
        Title: title,
        NotesBody: notes,
        Time: currentDateAndTime
      })
    )
    navigation.navigate('Home')
  }


  return (
    <View>

      <TextInput placeholder='Enter the Title' style={{marginBottom:8, marginTop: 10}} 
      onChangeText={setTitle}
      value={title}
      />
      
      <TextInput
      multiline={true}
      numberOfLines={4}
      onChangeText={setNotes}
      value={notes}
      style={styles.textarea}
      />

      <TouchableOpacity
      onPress={AddNote}
      >
        <Text style={styles.addnote}>
        Add Note
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  textarea: {
    height: '65%'
  },
  addnote : {
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: '#000',
    width: 100,
    color: '#fff',
    textAlign: 'center',
    padding: 10
  }
});
