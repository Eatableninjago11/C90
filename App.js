import React,{useState} from "react";
import {KeyBoardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyBoard, ScrollView, Button} from "react-native";
import Task from "./components/Task";

export default function App(){
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = ()=> {
        keyboard.dismiss();
        setTaskItems([...taskItems,task]) 
        setTask(null);
    }
    const completeTask = (index)=> {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index,1);
        setTaskItems(itemsCopy)
    }

    return(
        <View style={styles.container}>
            <ScrollView
            contentContainerStyle={{
                flexGrow: 1,
            }}

            keyboardShouldPersistTaps='handled'
            >
                <View style={styles.textWrapper}>

                <Text style={styles.title}>
                  
         Todo <Text style = {{fontWeight:"300",color :"#24A6D9"}}> Lists </Text>
         </Text>
                </View>

                
            </ScrollView>
            
        </View>
    )
}
