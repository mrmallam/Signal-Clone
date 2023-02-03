import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { auth } from '../firebase';


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            // console.log(authUser);
            if (authUser) {
                navigation.replace("Home");
            }
        });
        return unsubscribe;
    }, []);

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password).catch((error) => alert(error));
    };

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light' />
            <Image
                source={{
                    uri: "https://seeklogo.com/images/S/signal-logo-20A1616F60-seeklogo.com.png",
                }}
                style={{ width: 150, height: 150, marginBottom: 30 }}
            />
            <View style={styles.inputContainer}>
                <Input
                    placeholder='Email'
                    autoFocus
                    type="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)} />

                <Input
                    placeholder='Password'
                    secureTextEntry
                    type="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    onSubmitEditing={signIn}
                />
            </View>
            <Button containerStyle={styles.Button} onPress={signIn} title="Login" />
            <Button
                onPress={() => navigation.navigate('Register')}
                containerStyle={styles.Button}
                type="outline"
                title="Register"
            />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}
export default LoginScreen

const styles = StyleSheet.create({
    inputContainer: {
        width: 300,
    },
    Button: {
        width: 200,
        marginTop: 10,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
})