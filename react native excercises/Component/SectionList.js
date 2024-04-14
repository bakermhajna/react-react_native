import {View, Text ,SectionList,StyleSheet} from "react-native"


const menuItemsToDisplay = [
    {
      title: 'Appetizers',
      data: [
        { name: 'Hummus', price: '$5.00' },
        { name: 'Moutabal', price: '$5.00' },
        { name: 'Falafel', price: '$7.50' },
        { name: 'Marinated Olives', price: '$5.00' },
        { name: 'Kofta', price: '$5.00' },
        { name: 'Eggplant Salad', price: '$8.50' },
      ],
    },
    {
      title: 'Main Dishes',
      data: [
        { name: 'Lentil Burger', price: '$10.00' },
        { name: 'Smoked Salmon', price: '$14.00' },
        { name: 'Kofta Burger', price: '$11.00' },
        { name: 'Turkish Kebab', price: '$15.50' },
      ],
    },
    {
      title: 'Sides',
      data: [
        { name: 'Fries', price: '$3.00', id: '11K' },
        { name: 'Buttered Rice', price: '$3.00' },
        { name: 'Bread Sticks', price: '$3.00' },
        { name: 'Pita Pocket', price: '$3.00' },
        { name: 'Lentil Soup', price: '$3.75' },
        { name: 'Greek Salad', price: '$6.00' },
        { name: 'Rice Pilaf', price: '$4.00' },
      ],
    },
    {
      title: 'Desserts',
      data: [
        { name: 'Baklava', price: '$3.00' },
        { name: 'Tartufo', price: '$3.00' },
        { name: 'Tiramisu', price: '$5.00' },
        { name: 'Panna Cotta', price: '$5.00' },
      ],
    },
  ];

export default SectionListComp = () => {
    const renderItem = ({ item }) => {
        return <Item item={item} />;}
  
    const renderSectionHeader = ({ section: { title } }) => (
      <Text style={menuStyles.sectionHeader}>{title} </Text>
    );

    const sep=()=><View style={styles.sep}/>
  
    return (
      <View style={menuStyles.container}>
        <SectionList
          keyExtractor={(item, index) => item + index}
          sections={menuItemsToDisplay}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          ListFooterComponent={Footer}
          ItemSeparatorComponent={sep}>
            
          </SectionList>
      </View>
    );
};


const Footer = () => (
    <Text style={menuStyles.footerText}>
      All Rights Reserved by Little Lemon 2022
    </Text>
);



const Item = ({ item  }) => (
     <View style={menuStyles.innerContainer}>
       <Text style={menuStyles.itemText}>{item.name}</Text>
       <Text style={menuStyles.itemText}>{item.price}</Text>
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
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    sectionHeader: {
      backgroundColor: '#F4CE14',
      color: '#333333',
      fontSize: 34,
      flexWrap: 'wrap',
      textAlign: 'center',
    },
    itemText: {
      color: 'white',
      fontSize: 23,
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
});