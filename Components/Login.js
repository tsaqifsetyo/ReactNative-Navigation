import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput,Button,Image} from 'react-native';

export default class Login extends Component{

    render(){
        return(
            <View style={styles.container}>
                
                <Text style={styles.title}>Login</Text>

                <TextInput style={styles.user}
                    style={{height: 55,marginTop:55}}
                    placeholder="Username"
                    onChangeText={(text) => this.setState({text})}
                />

                <TextInput
                    style={{height: 55}}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({text})}
                />

                <Button style ={{margin: 20,flexDirection: 'row',justifyContent: 'space-between'}}
                title="Login"
                color="purple"
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:3,
    },

    title: {
        fontWeight: 'bold',
        fontSize : 30,
        color:'black',
        alignItems:"center",
        marginTop:100,
        textAlign:'center'
    },


})