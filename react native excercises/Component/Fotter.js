import { View, Text } from 'react-native';

export default function Fotter(){

    return(

            <View style={{
              flex:0.1,
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: '#fbdabb',
              }}>
                <Text  style={{
                      padding: 20,
                      fontSize: 10,
                      color: 'black',
                      textAlign: 'center',
                    }}>All rights reserved by Little Lemon, 2022</Text>
            </View>


    );
}