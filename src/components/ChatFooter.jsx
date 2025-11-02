import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import VectorIcon from './../utils/VectorIcon';
import { Colors } from './../theme/Colors';


const ChatFooter = () => {


    const [message, setMessage] = useState('');
    const [sendEnable, setSendEnable] = useState(false);

    const onChange = (value) => {
        setMessage(value);
        setSendEnable(true);
    }
    const onSend = () => {
        setMessage('');
        setSendEnable(false);
        Alert.alert("message Sent")
    }

    return (
        <View style={styles.container} >
            <View style={styles.leftContainer}>

                <View style={styles.row}>


                    <VectorIcon
                        type="MaterialDesignIcons"
                        name="sticker-emoji"
                        color={Colors.primaryColor}
                        size={20}
                    />

                    <TextInput
                        placeholder="Message"
                        placeholderTextColor={Colors.textGrey}
                        style={styles.textInput}
                        onChangeText={value => onChange(value)}
                        value={message} />

                </View>

                <View style={styles.row}>


                    <VectorIcon
                        type="Entypo"
                        name="attachment"
                        color={Colors.primaryColor} F
                        size={18}
                    />
                    {!sendEnable && (

                        <><VectorIcon
                            type="MaterialDesignIcons"
                            name="currency-rupee"
                            color={Colors.primaryColor}
                            size={21}
                            style={styles.iconStyle}
                        />
                            <VectorIcon
                                type="Feather"
                                name="camera"
                                color={Colors.primaryColor}
                                size={20}
                            />
                        </>
                        )





                    }
                </View>

            </View>
            <View style={styles.rightContainer}>

                {sendEnable ?

                    (<VectorIcon
                        type="Ionicons"
                        name="send"
                        color={Colors.tertiary}
                        size={20}
                        onPress={onSend}
                    />
                    ) :
                    (<VectorIcon
                        type="MaterialDesignIcons"
                        name="microphone"
                        color={Colors.tertiary}
                        size={20}
                    />
                    )

                }

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 17,
        color: Colors.messageColor,
        marginLeft: 5,

    },
    container: {
        backgroundColor: Colors.primaryColor,
        paddingVertical: 12,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    leftContainer: {
        width: '85%',
        flexDirection: 'row',
        backgroundColor: Colors.white,
        borderRadius: 30,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
    },
    rightContainer: {
        backgroundColor: Colors.background,
        padding: 11,
        borderRadius: 50,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconStyle: {
        marginHorizontal: 18,
    }
})

export default ChatFooter