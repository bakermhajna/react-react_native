import {View,Text} from "react-native"

export default function Welcome(){


    return(

        <View style={{flex:0.35,position:"relative",top:"10%",margin:10,padding:5}}>
            <Text style={{padding:15,textAlign:"center",fontSize:29 ,color:"white"}}>Welcome to Little Lemon</Text>
            <Text style={{padding:10,textAlign:"center",fontSize:20,color:"white", marginVertical: 8,}}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>

        </View>

    )


}