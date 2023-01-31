import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { ListItem, Avatar } from 'react-native-elements'
import { db } from '../firebase';

const CustomListItem = ({ id, chatName, enterChat }) => {
    const [chatMessages, setChatMessages] = React.useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('chats').doc(id).collection('messages').
            orderBy('timestamp', 'desc').onSnapshot(snapshot =>
                setChatMessages(snapshot.docs.map((doc) => doc.data()))
            );
        return unsubscribe;
    });

    return (
        <ListItem key={id} onPress={() => enterChat(id, chatName)} buttomDivider >
            <Avatar
                rounded
                source={{
                    uri: chatMessages?.[0]?.photoURL ||
                        "https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: '800' }}>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellip sizeMode="tail">
                    {chatMessages?.[0]?.displayName}: {chatMessages?.[0]?.message}
                </ListItem.Subtitle>


            </ListItem.Content>

        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})