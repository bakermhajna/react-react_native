import {useState,useEffect} from "react";
import { View ,Text,StyleSheet ,Pressable,Dimensions,SectionList } from "react-native";
import { HStack,Box,Input,Center, } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { createTable ,getMenuItems,saveMenuItems,filterByQueryAndCategories } from "./database";
import { getSectionListData } from "../utils/utils";




const API_URL =
  'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json';

  const screenDimentions=Dimensions.get("screen")

  const fetchData = async() => {
    const menu=await fetch(API_URL)
    const t=await menu.json()
    return t;
}

  const Item = ({ item  }) => (
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{item.name}</Text>
      <Text style={menuStyles.itemText}>{item.price}</Text>
    </View>
);

const Searchbar=()=>{
    return(
        <>
        <Box marginTop={"7%"} flexDirection={"row"} justifyContent={"space-between"}>
                <Center marginLeft={"2%"}>
                    <FontAwesome name="search" size={24} color="black" />
                </Center>
                <Input placeholder="Search" borderRadius={50} width={"90%"}/>
            </Box>
        </>
    )
}

const Mycenter=({item,backgroundColor,width})=>{

    if(backgroundColor)return(
        <>
                <Center
                    borderColor={"white"} 
                    borderWidth={1}
                    width={screenDimentions.width/3}
                    height={16}
                    backgroundColor={"red.400"}
                    marginTop={"10%"}
                    >
                        <Text>{item}</Text>
                </Center>
                </>
    )

    return(
                <>
                <Center
                    borderColor={"white"} 
                    borderWidth={1}
                    width={screenDimentions.width/3}
                    height={16}
                    marginTop={"10%"}
                    >
                        <Text>{item}</Text>
                </Center>
                </>

    )
}
export default function Project(){

    const sections = ['Appetizers', 'Salads', 'Beverages'];
    const [sectionFilter , setSectionFilter]=useState({
        "Appetizers":true,
        "Salads":true,
        "Beverages":true
    }) 
    const [sectionDatavar,setSectionData] =useState([])
    

    const renderSectionHeader = ({ section: { title } }) => (
        <Text style={menuStyles.sectionHeader}>{title} </Text>
      );

    const renderItem = ({ item }) => {
        return <Item item={item} />;}
    
    const sep=()=><View style={menuStyles.sep}/>

    useEffect(() => {
            const use =async ()=>{
               await createTable()
               let menuItems=await getMenuItems()
               if(menuItems.length===0){
                const menu =await fetchData()
                saveMenuItems(menu)
                menuItems=menu
               }
               const sectiondata =getSectionListData(menuItems)
               setSectionData(sectiondata)
            }
            use()
            
      }, []);
    return(
       <>
            <Searchbar/>
            <Box>
                <HStack>

                    {sections.map((item)=>{
                        return(
                            <Pressable onPress={()=>{
                                const newtsectionfilter={...sectionFilter,[item]:!(sectionFilter[item])}
                                setSectionFilter(newtsectionfilter)
                                filterByQueryAndCategories(newtsectionfilter).then(result=>{
                                    const data=getSectionListData(result)
                                    setSectionData(data)
                                })
                                
                            }}
                            key={item}
                            >
                            {sectionFilter[item]
                            ?
                            <Mycenter item={item}/>
                            :
                            <Mycenter backgroundColor={"red.400"} item={item}/>
                            }
                            </Pressable>

                        )
                    })}
                </HStack>
            </Box>
            

            <SectionList
                keyExtractor={(item,index) => item.name+index}
                sections={sectionDatavar}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                ItemSeparatorComponent={sep}>
            </SectionList>
            
       
       </>
    )

}


const menuStyles = StyleSheet.create({
    container: {
      flex: 0.95,
    },
    innerContainer: {
      paddingHorizontal: 40,
      paddingVertical: 20,
      backgroundColor: '#333333',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    
    itemText: {
      color: 'white',
      fontSize: 15,
    },
    sep: {
      borderBottomWidth: 1,
      borderColor: 'white',
    },
    
});