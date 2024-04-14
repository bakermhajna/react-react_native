import {View ,Text , Image ,StyleSheet} from "react-native"




export default function WelcomeImage(){

    return (

        <View style={styles.container}>
           
           <Image style={styles.image} resizeMode="contain" source={require("./../assets/img/img.png")} />
           
            <Text style={styles.title}>
                Little Limon
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    logo: {
      height: 100,
      width: 300,
    },
    image: {
      width: 300,
      height: 80,
      borderRadius: 10,
      margin:10,
      position:"absolute",
      left:-80,
      

    },
    container: {
      flexDirection: 'row',
      position:"relative",
      height:100,
      backgroundColor: '#fff',
    },
  
    title: {
      marginTop: 35,
      color: '#333333',
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft:160
    },
  });