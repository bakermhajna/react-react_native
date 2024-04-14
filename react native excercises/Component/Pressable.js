import { useState } from "react";
import {View ,Text ,StyleSheet,SectionList,Pressable} from "react-native"

const menuItemsToDisplay = [
    {
      title: 'Appetizers',
      data: [
        'Hummus',
        'Moutabal',
        'Falafel',
        'Marinated Olives',
        'Kofta',
        'Eggplant Salad',
      ],
    },
    {
      title: 'Main Dishes',
      data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
    },
    {
      title: 'Sides',
      data: [
        'Fries',
        'Buttered Rice',
        'Bread Sticks',
        'Pita Pocket',
        'Lentil Soup',
        'Greek Salad',
        'Rice Pilaf',
      ],
    },
    {
      title: 'Desserts',
      data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
    },
  ];

export default PressableSection = () => {

    const [showMEnu ,setShowMenu] =useState(false)
    const renderItem = ({ item }) => {
        return <Item name={item} />;}
  
    const renderSectionHeader = ({ section: { title } }) => (
      <Text style={menuStyles.sectionHeader}>{title} </Text>
    );

    const sep=()=><View style={styles.sep}/>
  
    return (
        
      <View style={menuStyles.container}>
        {!showMEnu && (
            <Text style={menuStyles.infoSection}>
            Little Lemon is a charming neighborhood bistro that serves simple food
            and classic cocktails in a lively but casual environment. View our
            menu to explore our cuisine with daily specials!
            </Text>
        )}
        <Pressable style={menuStyles.button} onPress={()=>{setShowMenu(!showMEnu)}}>
           <Text style={menuStyles.buttonText}> {showMEnu ? "Home":"View Menu"}</Text>
        </Pressable>
        {showMEnu && (
            <SectionList
          keyExtractor={(item, index) => item + index}
          sections={menuItemsToDisplay}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          ListFooterComponent={Footer}
          ItemSeparatorComponent={sep}>
            
          </SectionList>

        )}
      </View>
    );
};


const Footer = () => (
    <Text style={menuStyles.footerText}>
      All Rights Reserved by Little Lemon 2022
    </Text>
);



const Item = ({ name  }) => (
     <View style={menuStyles.innerContainer}>
       <Text style={menuStyles.itemText}>{name}</Text>
     </View>
);



const menuStyles = StyleSheet.create({
    container: {
      flex: 0.95,
    },
    innerContainer: {
      paddingHorizontal: 40,
      paddingVertical: 20,
      backgroundColor: '#333333',
    },
    sectionHeader: {
      backgroundColor: '#fbdabb',
      color: '#333333',
      fontSize: 34,
      flexWrap: 'wrap',
      textAlign: 'center',
    },
    itemText: {
      color: 'white',
      fontSize: 32,
    },
    separator: {
      borderBottomWidth: 1,
      borderColor: '#EDEFEE',
    },
    footerText: {
      color: '#EDEFEE',
      fontSize: 20,
      flexWrap: 'wrap',
      textAlign: 'center',
    },
    button: {
      fontSize: 22,
      padding: 10,
      marginVertical: 8,
      margin: 40,
      backgroundColor: '#EDEFEE',
      borderColor: '#EDEFEE',
      borderWidth: 2,
      borderRadius: 12
    },
    buttonText: {
      color: '#333333',
      textAlign: 'center',
      fontSize: 32,
    },
    infoSection: {
      fontSize: 24,
      padding: 20,
      marginVertical: 8,
      color: '#EDEFEE',
      textAlign: 'center',
      backgroundColor: '#495E57',
    },
  });