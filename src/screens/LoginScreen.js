import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button } from 'react-native-paper'
const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    return (
        <KeyboardAvoidingView
            behavior='position'
        >
            <View style={styles.box1}>
                <Text style={styles.text}>Welcome to MyChatApp 01</Text>
                <Image style={styles.image} source={require('../assets/chat.png')} />
            </View>
            <View style={styles.box2}>


                <TextInput
                    label={"Email"}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    mode='outlined'
                />

                <TextInput
                    label={"Password"}
                    mode='outlined'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                />
                <TouchableOpacity style={styles.Button}

                    onPress={() => {}}>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>Login</Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("Signup")}>
                <Text style={{textAlign:'center'}}>Don't have an account</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 22,
        color: 'green',
        margin: 10

    },
    image: {
        width: 200,
        height: 200
    },
    box1: {
        alignItems: 'center'
    },
    box2: {
        height: '50%',
        paddingHorizontal: 40,
        justifyContent: 'space-evenly'
    },
    Button: {
        backgroundColor: '#40b7ad',
        padding: 10
    }
})

export default LoginScreen;
