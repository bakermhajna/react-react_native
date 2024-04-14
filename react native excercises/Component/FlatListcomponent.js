import {View,Text,FlatList,StyleSheet} from "react-native"





export default function FlatListcomp(){


    return(
        <View style={styles.container}>
            <FlatList 
            data={menuItemsToDisplay} 
            keyExtractor={(item) => item.id} 
            renderItem={renderItem} 
            ItemSeparatorComponent={sep}/>

        </View>

    );
}

const sep=()=><View style={styles.sep}/>

function Item1(props){

    return(
        <View  style={styles.itemText}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.price} >{props.price}</Text>
        </View>
    )
}

const Item = ({ name, price }) => (
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{name}</Text>
      <Text style={menuStyles.itemText}>{price}</Text>
    </View>
  );

const renderItem=({item})=> <Item name={item.name} price={item.price}></Item>

const menuItemsToDisplay = [
    { name: 'Hummus', price: '$5.00', id: '1A' },
    { name: 'Moutabal', price: '$5.00', id: '2B' },
    { name: 'Falafel', price: '$7.50', id: '3C' },
    { name: 'Marinated Olives', price: '$5.00', id: '4D' },
    { name: 'Kofta', price: '$5.00', id: '5E' },
    { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
    { name: 'Lentil Burger', price: '$10.00', id: '7G' },
    { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
    { name: 'Kofta Burger', price: '$11.00', id: '9I' },
    { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
    { name: 'Fries', price: '$3.00', id: '11K' },
    { name: 'Buttered Rice', price: '$3.00', id: '12L' },
    { name: 'Bread Sticks', price: '$3.00', id: '13M' },
    { name: 'Pita Pocket', price: '$3.00', id: '14N' },
    { name: 'Lentil Soup', price: '$3.75', id: '15O' },
    { name: 'Greek Salad', price: '$6.00', id: '16Q' },
    { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
    { name: 'Baklava', price: '$3.00', id: '18S' },
    { name: 'Tartufo', price: '$3.00', id: '19T' },
    { name: 'Tiramisu', price: '$5.00', id: '20U' },
    { name: 'Panna Cotta', price: '$5.00', id: '21V' },
  ];

const styles = StyleSheet.create({
    container: {
      flex: 0.75,
    },
    innerContainer: {
      paddingHorizontal: 40,
      paddingVertical: 20,
      backgroundColor: 'black',
    },
    headerText: {
      color: 'white',
      fontSize: 40,
      flexWrap: 'wrap',
      textAlign: 'center',
    },
    itemText: {
      flexDirection:'row', flexWrap:'wrap',justifyContent: 'flex-end'
    },
    name:{
        color:"white",
        marginRight:"80%"
    },
    price:{
        color:"white",
        padding:10,
        marginRight:15,
        justifyContent:"center"
        
    },
    sep:{
        borderWidth:2,
        color:"white"
    }
  });

  const menuStyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    innerContainer: {
      paddingHorizontal: 40,
      paddingVertical: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    itemText: {
      color: '#F4CE14',
      fontSize: 20,
    },
  });