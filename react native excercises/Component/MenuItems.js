import {View ,Text,ScrollView,StyleSheet} from "react-native"
const menuItemsToDisplay = [
    'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
  ];
export default function MenuItems(){
    return(

        <View style={styles.container}>
        <ScrollView>
          <Text style={styles.text1}>
            Welcome To Litlle Limon
          </Text>
          <Text style={styles.text2}>
            {menuItemsToDisplay[0]}
          </Text>
        </ScrollView>
      </View>


    );
}

styles=StyleSheet.create({
    container:{
        flex:1
    },
    text1:{ marginBottom:60,marginTop:60,textAlign:"center",color: 'white', fontSize: 40, flexWrap: 'wrap' },
    text2:{textAlign:"center", color: 'white', fontSize: 36 }



})


