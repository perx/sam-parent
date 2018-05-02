import React from "react";
import {Button,View,Image,TextInput,Text,TouchableNativeFeedback,TouchableOpacity} from "react-native";

export class LoginScreen extends React.Component{
    static navigationOptions = {
        header:null
    };

    render(){
        return (
            <View style={{flex:1,backgroundColor:'#3bb2d0',flexDirection:'column'}}>
                <View style={{flex:80,marginTop:80,alignItems:'center'}}>
                    <Text style={{color:'#fff',fontSize:18,fontFamily:'sans-serif'}}>Hi! I'm SAM</Text>
                    <Text style={{color:'#fff',fontSize:15,fontFamily:'sans-serif'}}>Please login to enter</Text>
                    <Image />
                    <View style={styles.inputContainer}>
                        <TextInput underlineColorAndroid='transparent' style={styles.input} placeholder={"Username"}/>
                    </View>
                    <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}
                                             //background={TouchableNativeFeedback.Ripple('#fff')}
                                    onPress={()=>{this.props.navigation.navigate('Home', {})}}
                                    >
                        <View style={styles.button}>
                            <Image style={{width:18,height:15}} source={require('./images/enter.png')}></Image>
                        </View>
                    </TouchableNativeFeedback>
                    <View style={styles.inputContainerPwd}>
                        <TextInput secureTextEntry={true}
                                   underlineColorAndroid='transparent' style={styles.input} placeholder={"Password"} />
                    </View>
                </View>
            </View>
        )
    }
};
const styles={
    inputContainer: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth:1,
        borderBottomWidth:1,
        height: 40,
        borderColor:'#d0d0d0',
        width:250,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        backgroundColor: '#ffffff',
        marginTop:20
    },
    inputContainerPwd: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth:1,
        borderBottomWidth:1,
        height: 40,
        borderColor:'#d0d0d0',
        width:250,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        backgroundColor: '#ffffff',
    },
    input: {
        //height: 30,
        //backgroundColor: '#ffffff',
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop:10,
        paddingBottom:10
    },

    button:{
        height:40,
        width:40,
        borderRadius:50,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        marginTop:85,
        right:'10%',
        shadowColor: '#3bb2d0',
        shadowOffset: { width: 4, height: 6 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 1,
        zIndex:999
    }
};