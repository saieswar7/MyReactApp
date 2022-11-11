import React from "react";
import { Text, View,FlatList,StyleSheet, TouchableOpacity, Image} from "react-native";
import useEmails from "./useEmails";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';


const styles = StyleSheet.create({
    list: { 
        
        backgroundColor: 'white', 
        height: 80, 
        justifyContent: 'space-around', 
        paddingLeft: 10, 
        elevation: 1,
        
        },
        fab: { 
            position: 'absolute', 
            width: 56, 
            height: 56, 
            alignItems: 'center', 
            justifyContent: 'center', 
            right: 20, 
            bottom: 20, 
            backgroundColor: '#03A9F4', 
            borderRadius: 30, 
            elevation: 8 
            }, 
            fabIcon: { 
              fontSize: 40, 
              color: 'white' 
            }
});


const Emails =({navigation})=>{
    const {navigate} = navigation;


    const {isloading,emails,error}=useEmails();
    return(
      <View >
      <FlatList
        data={emails}
        renderItem={({item}) =>
        <View style={styles.list}>
            <TouchableOpacity onPress={()=>{
                navigate('Email-info',{item:item});
            }}>
           

       
        <Text  numberOfLines={1} ellipsizeMode='tail' style={{fontWeight:'bold'}}>
             {item.title}
            </Text >
            <Text numberOfLines={2} ellipsizeMode='tail'>
                {item.body}
            </Text>
            </TouchableOpacity>
            
            
        </View>
        }
      />
      <TouchableOpacity onPress={()=>{
                navigate('Composing');
            }} style={styles.fab} >
        <Text style={styles.fabIcon}>
            +
           
            </Text>
            </TouchableOpacity>
      
      </View>
    );
}


export default Emails;