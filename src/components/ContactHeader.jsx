import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import VectorIcon from './../utils/VectorIcon';
import { Colors } from './../theme/Colors';
import { useNavigation } from '@react-navigation/native';

const ContactHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <View style={styles.miniContainer}>

                <VectorIcon type="Ionicons" name="arrow-back" color={Colors.white} size={24} onPress={() => navigation.goBack()} />
                <View>
                    <Text style={styles.selectContacts}>Select Conatact</Text>
                    <Text style={styles.count}>47 Contacts</Text>
                </View>
            </View>

            <View style={styles.miniContainer}>

                <VectorIcon
                    type="Ionicons"
                    name="search"
                    color={Colors.secondaryColor}
                    size={20}
                    style={styles.iconStyle}
                />
                <VectorIcon type="Entypo" name="dots-three-vertical" color={Colors.white} size={20} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primaryColor,
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',


    },
    miniContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    selectContacts: {
        fontSize: 17,
        color: Colors.white,
        marginLeft: 20,


    },
    count: {
        fontSize: 12,
        color: Colors.white,
        marginLeft: 20,
    },
    iconStyle: {
        marginHorizontal: 25,

    },
})

export default ContactHeader