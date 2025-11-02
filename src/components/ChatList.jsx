import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import User1 from '../assets/user1.jpg'
import { Colors } from '../theme/Colors'
import VectorIcon from './../utils/VectorIcon';
import { ChatListData } from './../data/ChatListData';
import { useNavigation } from '@react-navigation/native';


const ChatList = () => {

    const navigation = useNavigation();
    const onNavigate = () => {
        navigation.navigate("ChatScreen")
    }

    return (
        <>
            {ChatListData.map(item => (
                <View key={item.id}>


                    <TouchableOpacity onPress={onNavigate} style={styles.container}>
                        <View style={styles.leftContainer}>
                            <Image source={item.profile} style={styles.profileImg} />
                            <View>
                                <Text style={styles.username}>{item.name}</Text>
                                <Text style={styles.message}>{item.message}</Text>
                            </View>
                        </View>

                        <View style={styles.rightContainer}>
                            <Text style={styles.timeStamp}>{item.time}</Text>

                            {(item.mute) &&

                                <VectorIcon
                                    type="MaterialDesignIcons"
                                    name="volume-variant-off"
                                    color={Colors.primaryColor}
                                    size={22}
                                    style={styles.muteIcon}
                                />
                            }

                        </View>




                    </TouchableOpacity>
                </View>
            ))}

        </>

    )
}

const styles = StyleSheet.create({
    profileImg: {
        borderRadius: 50,
        height: 45,
        width: 45,
        marginRight: 15,
        // marginHorizontal:15,
    },
    container: {
        backgroundColor: Colors.background,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    username: {
        color: Colors.tertiary,
        fontSize: 16,
        fontWeight: 500,
    },
    message: {
        color: Colors.primaryColor,
        fontSize: 16,
        fontWeight: 400,
    },
    leftContainer: {
        flexDirection: 'row',

    },
    timeStamp: {
        color: Colors.tertiary,
        fontSize: 12,
    },
    muteIcon: {
        marginTop: 5,
        marginLeft: 20,
    }

})
export default ChatList