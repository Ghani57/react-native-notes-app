import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SecondScreen from './Screens/SecondScreen';
import HomeScreen from './Screens/HomeScreen';
import ViewNoteScreen from './Screens/ViewNoteScreen';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function NotesApp() {

  const notes = useSelector((state) => state.note.mynotes)

  return (
    <NavigationContainer>
    <Stack.Navigator  initialRouteName="Home"  >
      <Stack.Screen name="Home" component={HomeScreen}
      name="Home"
      component={HomeScreen}
      options={{
        title: 'My Notes',
        headerStyle: {
          backgroundColor: '#FFA500',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
  
        },
        headerTitleAlign: 'center'
      }}
      
      />
      <Stack.Screen name="second" component={SecondScreen}
      options={{
        title: 'Add Notes',
        headerStyle: {
          backgroundColor: '#FFA500',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
  
        },
        headerTitleAlign: 'center'
      }}
      />

<Stack.Screen name="viewNotes" component={ViewNoteScreen}
      title={notes.Title}
      options={{
        title: 'View Notes',
        headerStyle: {
          backgroundColor: '#FFA500',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
  
        },
        headerTitleAlign: 'center'
      }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
