import React, { Component } from 'react';
import { StyleSheet, View, TextInput,TouchableOpacity,Text,StatusBar } from 'react-native';


export default class LoginForm extends Component {
    render() {
        return (
            
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <TextInput
                placeholder="Username"
                placeholderTextColor="black"
                onSubmitEditing={()=>this.passwordInput.focus()}
                returnKeyType="next"
                style={styles.input}></TextInput>

                <TextInput
                placeholder="Password"
                autoCapitalize='none'
                autoCorrect={false}
                placeholderTextColor="black"
                secureTextEntry
                returnKeyType="go"
                ref={(input=>this.passwordInput=input)}
                style={styles.input}></TextInput>
                <TouchableOpacity style={styles.buttoncontainer}>
                    <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>                
            </View>
        );
    }
}

const styles=StyleSheet.create(
    {
        container:{
            padding:10

        },
        input:{
        height:40 ,
        backgroundColor:'#C0C0C0',
        marginBottom:25,
        color:'rgb(0,0,0)',
        paddingHorizontal:10
        },
        buttoncontainer:{
            backgroundColor:'blue',
            paddingVertical: 10,
            
        },
        buttonText:{
            textAlign:'center',
            color: '#FFFFFF',
            fontWeight:'500'
        }
    });
