//Import libs
import React from 'react';
import {Text, View} from 'react-native';


//Create a Component
const Header=(props) =>{
    //const {textStyle,viewStyle}=styles;

    return (
        <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles={
    viewStyle:{
        backgroundColor:'#F8F8F8',
        justifyContent:'center',
        alignItems:'center',
        height:50,
        paddingTop:20,
        shadowColor:'#000000',
        shadowOffset:{width:0,height:3},
        shadowOpacity:0.4,
        elevation:2,
        position:'relative'
    },
    textStyle: {
        fontSize:20
    },
    
};

//Make the component available to other parts
export default Header;