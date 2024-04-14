
import { View,Text,FlatList,StyleSheet } from "react-native"
import { useState ,useEffect } from "react";


export default function MenuItems(){

    const [data ,setData] =useState()
    const [isLoading,setIsLoading]=useState(true)

    const getMenu=async ()=>{
        try{
            const  response=await fetch("https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/littleLemonSimpleMenu.json")
        const json =await response.json()
        console.log(json.menu)
        setData(json.menu)
        }catch(err){
            console.log(err)
        }finally{
            setIsLoading(false)
         }
    }

    useEffect(()=>{
      getMenu()
    },[])
return(

  <View style={styles.container}>
  {isLoading?(<Text>Loading</Text>):
  (
    <FlatList 
  data={data} 
  keyExtractor={(item) => item.id} 
  renderItem={renderItem} 
  ItemSeparatorComponent={sep}/>
)
}

</View>
)

}




const Item = ({ title, price }) => (
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{title}</Text>
      <Text style={menuStyles.itemText}>{price}</Text>
    </View>
  );

const renderItem=({item})=> <Item title={item.title} price={item.price}></Item>
const sep=()=><View style={styles.sep}/>

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