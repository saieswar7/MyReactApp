import React from "react";
import { Text, View } from "react-native";
import Emails from "./Emails";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmailInfo from "./EmailInfo";
import Composing from "./Composing";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


const App = () => {
return(

  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Emails">
        <Drawer.Screen name="Emails"  component={Emails}/>
        <Stack.Screen name="Email-info"  component={EmailInfo}/>
        <Stack.Screen name="Composing"  component={Composing}/>
    </Drawer.Navigator>

  </NavigationContainer>
  

)

}

export default App ;
