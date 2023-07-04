import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker'



const SignUpScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(null);
    const [showNext, setShowNext] = useState(false)

    const pickImage=()=>{
        launchImageLibrary({quality:0.5},(fileobj)=>{
    console.log(fileobj);
        })
    }

    return (
        <KeyboardAvoidingView
            behavior='position'
        >
            <View style={styles.box1}>
                <Text style={styles.text}>Welcome to MyChatApp 01</Text>
                <Image style={styles.image} source={require('../assets/chat.png')} />
            </View>
            <View style={styles.box2}>
                {!showNext &&
                    <>
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
                    </>}
                {showNext ?
                    <>
                        <TextInput
                            label={"Name"}
                            value={name}
                            onChangeText={(text) => setName(text)}
                            mode='outlined'
                        />
                        <TouchableOpacity style={styles.Button}

                            onPress={() =>pickImage()}>
                            <Text style={{ fontSize: 20, textAlign: "center" }}>Select Profile Pic</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button}

                            onPress={() => { }}>
                            <Text style={{ fontSize: 20, textAlign: "center" }}>Sign Up</Text>
                        </TouchableOpacity>

                    </>
                    :
                    <TouchableOpacity style={styles.Button}

                        onPress={() => setShowNext(true)}>
                        <Text style={{ fontSize: 20, textAlign: "center" }}>Next</Text>
                    </TouchableOpacity>
                }

                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Text style={{textAlign:'center'}}>already have an account ?</Text>
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

export default SignUpScreen;
