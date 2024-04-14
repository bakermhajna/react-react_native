import React, { useEffect, useState } from "react";
import { Input, Button, Box, Center } from "native-base";
import {  Text, View ,StyleSheet } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const db = SQLite.openDatabase('test');

export default function SqliteComponent() {

    const [coustomers,setCoustomers]=useState([])
    const [input,setInput]=useState("")
    const [editMode,setEditMode] =useState({})
    const [editInput,setEditInput]=useState("")

    useEffect(()=>{
        db.transaction((tx)=>{
            tx.executeSql("CREATE TABLE USERS ( id integer primary key not null, name text)")
        })
        db.transaction((tx)=>{
            tx.executeSql("select * from users where name != ''",[],(_,{rows})=>{
                setCoustomers(rows._array) 
            })
        })
    },[])

    const handleDelete=(userID)=>{
        db.transaction((tx)=>{
            tx.executeSql("DELETE FROM USERS WHERE id = ?",[userID])
            setCoustomers(coustomers.filter(user=>user.id!==userID))
        })
    }

    const handleChange=(newName,id)=>{
        db.transaction((tx)=>{
            tx.executeSql("UPDATE USERS SET name = ? WHERE id = ?",[newName,id])
        })
        setCoustomers(coustomers.map(user => {
            if (user.id === id) {
                return { ...user, name: newName };
            }
            return user;
        }));
        setEditMode({mode:false,target:0})


    }

    return (<>

        <Center marginTop={10} marginLeft={5} marginRight={5}>
            <Box alignItems="normal">
                <Input value={input} onChange={(e)=>{setInput(e.nativeEvent.text)}} mx="3" placeholder="Input" w="100%" />
            </Box>
        </Center>
        <Button margin={10} onPress={() => {
            if(input==="")return
            db.transaction((tx)=>{

                tx.executeSql("insert into users (name) values (?)",[input],(_,{insertId})=>{
                    setCoustomers([...coustomers,{name:input,id:insertId}])
                })
            })
            
           
            setInput("")
        }}><Text>Click to Add</Text></Button>
        <View >
            {
                coustomers.map((user)=>{
                    return (
                <View style={{flexDirection: 'row',justifyContent:"space-between",paddingLeft:20}}>
                 {editMode.mode && editMode.target === user.id
                 
                 ?

                 <  >
                    <Input value={editInput}  onChange={(e)=>{setEditInput(e.nativeEvent.text)}}   w="70%" />
                    <Button style={{}} onPress={()=>{
                        handleChange(editInput,user.id)
                    }} ><Ionicons name="checkmark-done" size={24} color="black" /></Button>
                 </>

                 :

                 <>
                 <Text style={styles.customertext} >{user.name}</Text>
                 <View style={{ flexDirection: 'row' }}>
                    <Button style={styles.buttontext} onPress={()=>{
                        handleDelete(user.id)
                    }}><AntDesign name="delete" size={24} color="black" /></Button>
                    <Button style={styles.buttontext} onPress={()=>{
                        setEditInput(user.name)
                        setEditMode({mode:true,target:user.id})
                    }}><Entypo name="edit" size={24} color="black" /></Button>
                  </View>
                 </>
                 }
                  
                </View>  
                )})
            }
        </View>
    </>)
}

const styles=StyleSheet.create({


    customeritem :{
        display: "flex",
         
        alignItems:"flex-start",/* This centers the buttons horizontally */
        margin: 5,
      },
      
      customertext :{
        color: "black",
        

      },
      
      buttontext: {
        /* Remove default button styles (background color, borders, etc.) */
        backgroundcolor: "transparent",
        padding: 3,
        margin:2
      },
})