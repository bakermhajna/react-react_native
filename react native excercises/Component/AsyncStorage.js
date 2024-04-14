import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState,useEffect, useRef } from "react";
import { Switch } from "native-base";

export default function AsyncStorageComponent() {
  const [PushNotificationChecked, setPushNotificationChecked] = useState(true);
  const [MarkitingEmailChecked, setMarkitingEmail] = useState(true);
  const [LatestNewsChecked, setLatestNews] = useState(true);
  const intialrender=useRef(true)

  const handleChangePushNotification = () => {
    setPushNotificationChecked(!PushNotificationChecked);
  };
  
  const handleChangeMarkitingEmail = () => {
    setMarkitingEmail(!MarkitingEmailChecked);
  };
  
  const handleChangeLatestNews = () => {
    setLatestNews(!LatestNewsChecked);
  };

  useEffect(() => {
    const retrieveInitialValues = async () => {
        try {
            console.log("0")
            const latestNews = await AsyncStorage.getItem('LatestNews'); 
            const marketingEmail = await AsyncStorage.getItem('MarketingEmail'); // Corrected variable name
            const pushNotification = await AsyncStorage.getItem('PushNotification');
            
            setPushNotificationChecked(pushNotification ? JSON.parse(pushNotification) : true);
            setMarkitingEmail(marketingEmail ? JSON.parse(marketingEmail) : true); // Corrected function name
            setLatestNews(latestNews ? JSON.parse(latestNews) : true); // Corrected function name
        } catch (error) {
          console.error('Error retrieving from AsyncStorage:', error);
        }
      };
      
  
     retrieveInitialValues();
  }, []);


  useEffect( ()=>{
    const handle=async()=>{
        try{
            if(intialrender.current){
                console.log("1")
                intialrender.current=false
            }else{
                await AsyncStorage.multiSet([["PushNotification",String(PushNotificationChecked)],["MarketingEmail",String(MarkitingEmailChecked)],["LatestNews",String(LatestNewsChecked)]],)
                console.log("2")
            }
        }catch(err){
            console.log(err)
        }
    }

    handle()

    },[PushNotificationChecked,MarkitingEmailChecked,LatestNewsChecked])

  return (
      <View style={styles.container}>
        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Push notification</Text>
          <Switch
            style={styles.switch}
            isChecked={PushNotificationChecked}
            onToggle={handleChangePushNotification}
            size="lg"
          />
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Marketing Emails</Text>
          <Switch
            style={styles.switch}
            isChecked={MarkitingEmailChecked}
            onToggle={handleChangeMarkitingEmail}
            size="lg"
          />
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Latest news</Text>
          <Switch
            style={styles.switch}
            isChecked={LatestNewsChecked}
            onToggle={handleChangeLatestNews}
            size="lg"
          />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // Add styles for the container if needed
    backgroundColor:"white",
    flex:1,
  },
  settingRow: {
    flexDirection: 'row', // Arrange elements horizontally
    alignItems: 'center', // Align vertically in the center
    justifyContent: 'space-between', // Distribute remaining space evenly
    paddingVertical: 10, // Add vertical padding for spacing
  },
  settingText: {
    fontSize: 30, // Adjust font size as needed
  },
  switch: {
    // Add styles for the switch if needed
  },
});
