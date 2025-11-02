import { View, Text, Modal, Image, StyleSheet } from 'react-native'
import React from 'react'
import Status6 from '../assets/status6.png'
import Profile from '../assets/user2.jpg'
import { Colors } from './../theme/Colors';
import VectorIcon from './VectorIcon';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from './ProgressBar';

const FullModal = (props) => {

    const navigation = useNavigation();

    // '''''''''''''''''''
    const { showStatusModal, setShowStatusModal, item, setTimeup } = props;
    console.log(showStatusModal);
    
    const updateModalStatus = () => {
        setShowStatusModal(prev => ({ ...prev, [item.id]: false }));

        
    }

    return (
        <Modal
            animationType='fade'
            visible={!!showStatusModal} //It's a boolean (true or false) that determines whether the modal is currently displayed or hidden

            // onRequestClose={updateModalStatus}
            onRequestClose={() => setShowStatusModal(prev => ({ ...prev, [item.id]: false }))}

        >
            <View style={styles.container}>

                <ProgressBar setTimeup={setTimeup} />
                <View style={styles.topContainer}>
                    <View style={styles.topLeftContainer}>
                        <VectorIcon type="Ionicons" name="arrow-back" color={Colors.white} size={24} onPress={() => setShowStatusModal(prev => ({...prev, [item.id]:false}))} />
                        {/* <Image source={Profile} style={styles.profileImg} /> */}
                        <Image source={item.userImg} style={styles.profileImg} />
                        <Text style={styles.username}>{item.name}</Text>
                    </View>
                    <VectorIcon
                        type="Entypo"
                        name="dots-three-vertical"
                        color={Colors.secondaryColor}
                        size={18}
                    />
                </View>

                {/* <View style={styles.midContainer}> */}
                <Image source={item.storyImg} style={styles.storyImg} />
                <Text style={styles.storyCaption}>{item.storyMessage}</Text>
                {/* </View> */}
                {console.log(item, " Called ")}
                

                <View style={styles.replySection}>
                    <VectorIcon
                        type="Feather"
                        name="chevron-up"
                        color={Colors.secondaryColor}
                        size={18}
                        onPress={() => setShowStatusModal(prev => ({...prev, [item.id]:false}))}
                    />
                    <Text style={styles.reply}>Reply</Text>
                </View>


            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: Colors.tertiary,
        height: '100%',
        justifyContent: 'space-between',
    },
    storyImg: {
        height: '75%',
        width: "100%",
    },
    storyCaption: {
        fontSize: 17,
        color: Colors.white,
        textAlign: 'center',
        marginTop: 7,
    },
    topLeftContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },

    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 10,
        justifyContent: 'space-between',

    },
    profileImg: {
        height: 40,
        width: 40,
        borderRadius: 50,
    },
    username: {
        fontSize: 17,
        color: Colors.white,
        marginLeft: 10,

    },
    reply: {
        color: Colors.textGrey,
        textAlign: 'center',
        marginBottom: 10,

    },
    replySection: {
        alignItems: 'center',
    },
})

export default FullModal