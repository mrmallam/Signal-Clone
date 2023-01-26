import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Avatar } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

const ChatScreen = ({ navigation, route }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Chat",
            headerBackTitleVisible: false,
            // headerTitleAlign: "left",
            headerTitle: () => (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Avatar rounded source={{ uri: "https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg" }} />
                    <Text style={{ color: "white", marginLeft: 10, fontWeight: "700" }} >
                        {route.params.chatName}
                    </Text>
                </View>
            ),
            headerLeft: () => (
                <TouchableOpacity>
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
            )
        });
    }, [navigation]);

    return (
        <View>
            <Text>{route.params.chatName}</Text>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({})


