import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';



const HomeScreen = ({navigation}) => {

  const notes = useSelector((state) => state.note.mynotes)

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>
        All Notes
      </Text>
    </View>
    <View style={styles.body}>
{
  notes.length === 0 ? (
    <View style={styles.noNotes}>
        <Text style={styles.noNotesText}>
          No Notes 
        </Text>
      </View>
  ) :
  (
        <>
        <View style={styles.notesParent}>

        <FlatList 
        horizontal={true}
        data = {notes}
        renderItem = {({item, index}) => (
          <ScrollView>
          <TouchableOpacity
          onPress={() => {
            navigation.navigate('viewNotes', {notesTitle: notes[index].Title, notesTime: notes[index].Time, notesDesc: notes[index].NotesBody } )
          }}
          >
                <View style={styles.notes}>
                  <View style={styles.notesHeader}>
                    <Text style={styles.notesTitle}>
                      {item.Title}
                    </Text>
                  </View>
                  <View style={styles.notesBody}>
                    <Text style={styles.notesContent}>
                      {item.NotesBody}
                    </Text>
                  </View>
                  <View style={styles.notesFooter}
                  >
                    <Text style={styles.footerText}>
                      {item.Time}
                    </Text>
                  </View>
                </View>
            </TouchableOpacity>
            </ScrollView>
        )}
        />
        </View>
        
        </>
  )
} 


    </View>

    <View>
      <Text style={styles.developer}>
        By: Firecracker
      </Text>
    </View>
    <View>
      
      <TouchableOpacity style={styles.addbtn}
      onPress={() => navigation.navigate('second')}
      >
        <Icon name='add-circle' size={30} style={styles.btn} />
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#D3D3D3',
  },
  header:{
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'darkgray',
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '500'
  },
  body : {
    height: '70%',
  },
  headerRight: {
    flexDirection: 'row',
    marginRight: 15
  },
  bodyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20
  },
  noNotes: {
    width: '30%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50
  },
  noNotesText: {
    fontSize: 25,
    color: 'red'
  },
  addbtn: {
    position: 'absolute',
    right: 40,
    bottom: 10,
  },
  btn: {
    fontSize: 60,
    color: '#006400'
  },
  notesParent: {
    flexDirection: 'row',
    marginTop: 20
  },
  notes: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 10,
    marginLeft: 10,
    width: 140,
    height: 220,
    padding: 10,
    shadowColor: "#000",
  shadowOffset: {
  	width: 0,
  	height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 0,
  },
  notesHeader: {
    textAlign: 'center',
    alignItems: 'center'
  },
  notesTitle: {
    fontSize: 20,
    fontWeight: '700'
  },
  notesBody: {
    height: 150
  },
  notesFooter: {
    marginLeft: 20
  },
  footerText : {
    fontSize: 10
  },
  developer: {
    fontSize: 12,
    color: 'blue',
    textAlign: 'center'
  }
});
