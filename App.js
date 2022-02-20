import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import Task from './components/Tasks'
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([])


  const handleAddTask = ()=>{
    setTaskItems([...taskItems,task])
    setTask(null)
    Keyboard.dismiss()
  }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index,1)
    setTaskItems(itemsCopy)
  }
  return (
    <View style={styles.container}>
      {/*Today's tasks */}
      <View style = {styles.tasksWrapper}>
        <Text style = {styles.sectionTitle}>
          Today's Tasks!
        </Text>
        <View style = {styles.items}>
          {/* this is where the tasks go */}
          {
            taskItems.map((item,index)=>{
              return (
                <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      {/* Write a task */}
      <KeyboardAvoidingView style={styles.writeTaskWrapper} behavior={Platform.OS === "ios"?"padding":"height"}>
        <TextInput style={styles.input} placeholder={'Write a Task!'} onChangeText={text=>setTask(text)} value={task}/>
        <TouchableOpacity onPress={()=>handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    paddingHorizontal:10
  },
sectionTitle : {
  fontSize:24,
  fontWeight:'bolder'
},
items : {
  marginTop:20,
  
},
writeTaskWrapper:{
  position:'absolute',
  bottom:30,
  width:'100%',
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',
  paddingHorizontal:10,

},
input:{
  paddingVertical:10,
  width:250,
  paddingHorizontal:15,
  backgroundColor:'#fff',
  borderRadius:60,
  borderColor:'#c0c0c0',
  borderWidth:1,
},
addWrapper:{
  width:50,
  height:50,
  backgroundColor:'#fff',
  borderRadius:50,
  justifyContent:'center',
  alignItems:'center',
  borderColor:'#c0c0c0',
  borderWidth:1,
},
addText:{},
});
