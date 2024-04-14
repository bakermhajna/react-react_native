import {  Text,View ,StyleSheet} from 'react-native';
import LittleLemonHeader from "./Component/LittleLemonHeader";
import Fotter from "./Component/Fotter";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Welcome from './Component/Welcome';
import WelcomeScreen from './Component/WelcomeScreen';
import MenuItems from "./Component/MenuItems"
import FlatListcomp from './Component/FlatListcomponent';
import SectionList from './Component/SectionList';
import FeedbackForm from "./Component/FeedbackForm"
import LoginForm from './Component/LoginForm';
import Pressable from './Component/Pressable';
import { PaperProvider } from 'react-native-paper';
import WelcomeImage from './Component/WelcomeImage';
import Menu from "./Component/Menu"
import AsyncStorageComponent from './Component/AsyncStorage';
import SqliteComponent from './Component/SQLite';
import Project from './Component/project';

import { NativeBaseProvider } from "native-base";
function app() {
  return (
    <NativeBaseProvider>

      <View style={{flex: 1,backgroundColor: '#4d5e58',}}>
        {/* <LittleLemonHeader/> */}
          {/* <AsyncStorageComponent/> */}
          {/* <SqliteComponent/> */}
          <Project/>


      </View>
      
    </NativeBaseProvider>
      
    
  );
}






const Stack = createNativeStackNavigator();

function App1() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="login">
        <Stack.Screen name="login" component={LoginForm} />
        <Stack.Screen name="Menu" component={SectionList} />
      </Stack.Navigator>
      
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});








const Tab = createBottomTabNavigator();

function App2() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={(ob) => ({
        tabBarIcon: (ob2) => {
          let iconName="barbell-outline"
          if (ob.route.name === 'Welcome') {
            iconName = ob2.focused
              ? 'accessibility-outline'
              : 'airplane-outline';
          } else if (ob.route.name === 'Menu') {
            iconName =  'apps-outline';
          }
          return <Ionicons name={iconName} size={ob2.size} color={ob2.color} />;
        },
        tabBarLabel:(ob2)=>{
          let iconName="sport";
          if (ob.route.name === 'Welcome') {
            iconName = "login"
          } else if (ob.route.name === 'Menu') {
            iconName =  'Menu'
          }
          return <Text>{iconName}</Text>
        },
        tabBarStyle:{backgroundColor:"#54cc74"},
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
     <Tab.Screen name="Welcome" component={LoginForm} options={{ tabBarBadge: 3 }} />
      <Tab.Screen name="Menu" component={SectionList} />
      <Tab.Screen name="Menu2" component={Menu} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App1