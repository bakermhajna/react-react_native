import { useState,TextField } from "react";
import {View ,ScrollView, Text, StyleSheet,TextInput ,Pressable, useColorScheme} from "react-native"
import FeedbackForm from "./FeedbackForm";

export default function LoginForm({navigation}) {

    
    const [Email ,setEmail] =useState("")
    const [Password,setPassword] =useState("")
    const [Logedin ,setLogedin] =useState(false)
    const colorscheme=useColorScheme()

    const emailHandler=(email)=>{
      const newtext =email.nativeEvent.text
      setEmail(newtext)
    }
    const passwordHAndler=(password)=>{
      const newtext =password.nativeEvent.text
      setPassword(newtext)}
  return (
    <ScrollView style={[styles.container,colorscheme!=="light" ? {backgroundColor:"white"}:{backgroundColor:"black"}]}>
      {!Logedin &&(
        <View>
          <Text style={styles.headerText}>Welcome to Little Lemon</Text>
          <Text style={styles.regularText}>Login to continue </Text>
          <TextInput 
          style={styles.input}
          value={Email} 
          onChange={emailHandler}
          placeholder="Email"
          keyboardType={'email-address'}/>
          <TextInput
          style={styles.input}
          value={Password}  
          onChange={passwordHAndler}
          placeholder="Password"
          secureTextEntry={true}
          keyboardType={'default'}/>
          <Pressable style={styles.button} onPress={()=>{
            if(Email!="" && Password!=""){
               navigation.navigate('Menu')
            }
            
            }}>
              <Text style={styles.buttonText}> Log in</Text>
          </Pressable>
          
        </View>
      )}

      {Logedin && (
        <FeedbackForm/>
      )}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  }, input: { 
    height: 40, 
    margin: 12, 
    borderWidth: 1, 
    padding: 10, 
    fontSize: 16, 
    borderColor: 'white', 
    backgroundColor: 'white', 
    }, 
    button: {
      fontSize: 22,
      padding: 5,
      marginVertical: 4,
      margin: 80,
      backgroundColor: '#EDEFEE',
      borderColor: '#EDEFEE',
      borderWidth: 4,
      borderRadius: 200
    },
    buttonText: {
      color: '#333333',
      textAlign: 'center',
      fontSize: 32,
    },
});
