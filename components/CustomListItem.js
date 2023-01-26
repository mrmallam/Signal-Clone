import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ListItem, Avatar } from 'react-native-elements'

const CustomListItem = ({ id, chatName, enterChat }) => {
    return (
        <ListItem>
            <Avatar
                rounded
                source={{
                    uri: "https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: '800' }}>
                    Youtube Chat
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    This is a test Subtitle This is a test Subtitle This is a test Subtitle This is a test Subtitle This is a test Subtitle This is a test Subtitle This is a test Subtitle This is a test Subtitle
                </ListItem.Subtitle>


            </ListItem.Content>

        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})