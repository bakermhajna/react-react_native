import { View, Text ,Image,Dimensions } from 'react-native';

export default function LittleLemonHeader() {
  const windowWidth = Dimensions.get('window').width;
  return (
    <View style={{ flex: 0.1, backgroundColor: '#fbdabb' }}>
      <Image  
      style={{ alignSelf:"center",width: windowWidth-((5*windowWidth)/100),flex:1, resizeMode: 'contain' }}
      source={require("../assets/img/LIttle-Lemon-Logo.png")}/>
    </View>
  );
}
