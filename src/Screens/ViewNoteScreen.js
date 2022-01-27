import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';



const ViewNoteScreen = ({route}) => {

  const notes = useSelector((state) => state.note.mynotes)

  return (
    <View>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {route.params.notesTitle}
        </Text>
      </View>

      <View style={styles.notesBody}>
        <Text style={styles.notesDesc}>
          {route.params.notesDesc}
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {route.params.notesTime}
        </Text>
      </View>
    </View>
    </View>
  );
};

export default ViewNoteScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderColor: 'red',
    borderWidth: 2,
    paddingBottom: 5
  },
  header: {
    marginTop: 15,
    marginBottom: 10
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '700'
  },
  notesBody: {
    marginLeft: 12,
    height: 500
  },
  footerText: {
    fontSize: 10,
    marginLeft: 20,
  }
});
