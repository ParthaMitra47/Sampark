import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Profile from '../assets/user7.jpg'
import { Colors } from '../theme/Colors'
import { ContactListData } from '../data/ContactListData';


const ContactList = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contacts on WhatsApp</Text>
            {ContactListData.map(item => (
                <View style={styles.contactContainer} >
                    <Image style={styles.imgStyle} source={item.userImg} />
                    <Text style={styles.username}> {item.name}</Text>
                </View>

            ))}
        </View>
    )
}
const styles = StyleSheet.create({
    imgStyle: {
        height: 40,
        width: 40,
        borderRadius: 50,
    },
    container: {
        backgroundColor: Colors.background,
        padding: 16,
        // flexDirection:'row',

    },
    title: {
        fontSize: 12,
        color: Colors.tertiary,
        marginVertical: 7,
    },
    username: {
        fontSize: 16,
        color: Colors.tertiary,
        marginLeft: 15,
    },
    contactContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
    },

})
export default ContactList