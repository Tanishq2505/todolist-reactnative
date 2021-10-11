import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Task from './components/Tasks'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/*Today's tasks */}
      <View style = {styles.tasksWrapper}>
        <Text style = {styles.sectionTitle}>
          Today's Tasks!
        </Text>
        <View style = {styles.items}>
          {/* this is where the tasks go */}
           <Task text={'Task 1'}/>
           <Task text={'Task 2'}/>
           <Task/>
           <Task/>
           <Task/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  tasksWrapper : {
    paddingTop:80,
    paddingHorizontal:20
  },
sectionTitle : {
  fontSize:24,
  fontWeight:'bolder'
},
items : {
  marginTop:30,
  
},
});
