import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Button, Input } from 'react-native-elements'
import { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { db } from '../firebase';

const AddChatScreen = ({ navigation }) => {
    const [input, setInput] = useState('');

    const createChat = async () => {
        await db.collection('chats').add({
            chatName: input,
        }).then(() => {
            navigation.goBack();
        }).catch((error) => { alert(error) });
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Chats",
            title: "Add New Chat",
        });
    }, [navigation])

    return (
        <View style={styles.container}>
            <Input
                placeholder='Enter a chat name'
                value={input}
                onChangeText={(text) => setInput(text)}
                onSubmitEditing={createChat}
                leftIcon={
                    <AntDesign name='wechat' size={24} color='black' />
                }
            />
            <Button disabled={!input} onPress={createChat} title="Create new chat" />
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 30,
        height: '100%',

    },
})