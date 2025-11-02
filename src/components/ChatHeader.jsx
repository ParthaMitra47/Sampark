import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Profile from '../assets/user1.jpg'
import VectorIcon from './../utils/VectorIcon';
import { Colors } from './../theme/Colors';
import { useNavigation } from '@react-navigation/native';

const ChatHeader = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            <View style={styles.innercontainer} >
                <VectorIcon type="Ionicons" name="arrow-back" color={Colors.white} size={24} onPress={() => navigation.goBack()} />
                <Image source={Profile} style={styles.profilePhoto} />
                <Text style={styles.username}>Partha Mitra</Text>
            </View>

            <View style={styles.innercontainer}>
                <VectorIcon type="Ionicons" name="videocam" color={Colors.white} size={26} style={styles.icons} />
                <VectorIcon type="Ionicons" name="call" color={Colors.white} size={22} style={styles.icons} />
                <VectorIcon type="Entypo" name="dots-three-vertical" color={Colors.white} size={20} style={styles.icons} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profilePhoto: {
        height: 40,
        width: 40,
        borderRadius: 50,
    },
    container: {
        backgroundColor: Colors.primaryColor,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'

    },
    username: {
        fontSize: 17,
        color: Colors.white,
        marginLeft: 10,
        fontWeight: 500,
    },
    innercontainer:{
        flexDirection: 'row',
        alignItems:'center',
        
    },
    icons:{
        marginHorizontal:8,
    }

})

export default ChatHeader