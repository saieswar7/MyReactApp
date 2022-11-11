import React from 'react'
import { Text, View,StyleSheet, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';

const styles=StyleSheet.create({

    container:{
        padding:10,
        backgroundColor:'white'
    },
    TitleText:{
        fontWeight:'bold',
        paddingBottom:20
    },
    BodyText:{
        borderWidth:0.7,
        borderRadius:9,
        padding:10,
    },
    ButtonCss:{
        flexDirection:'column',
        flex:1,
        paddingTop:20,  
    },
    BCL:{
        fontSize:18,
        textAlign:'center',
        padding:10,
        backgroundColor:'#03A9F4',
        borderRadius:100,
    },
   
})

const EmailInfo =props=>{

    console.log(props)
    
    const {route}=props
    const {params} = route;
    const {item} = params;
    const {title,body,from_adress}=item;

    return(
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.TitleText}>
                {title}
            </Text>
            <Text style={styles.TitleText}>
                from :{from_adress}
            </Text>
            <Text style={styles.BodyText}>
                {body}
            </Text>

            <View style={styles.ButtonCss }>
                <TouchableOpacity onPress={()=>{Alert.alert('Replying')}} style={{paddingBottom:2}} >
                    <Text style={styles.BCL}>Reply</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{Alert.alert('Replying All')}} style={{paddingBottom:2}}>
                    <Text style={styles.BCL}>Reply All</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{Alert.alert('Forward')}}>
                    <Text style={styles.BCL}>Forward</Text>
                </TouchableOpacity>
                
            </View>
        </View>
        </ScrollView>
    )


}

export default EmailInfo;