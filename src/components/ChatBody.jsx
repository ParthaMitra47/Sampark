import { View, Text, StyleSheet, Animated } from 'react-native'
import React, { useRef } from 'react'
import { Colors } from './../theme/Colors';
import VectorIcon from './../utils/VectorIcon';
import { MessageData } from './../data/MessageData';
import { ScrollView } from 'react-native-gesture-handler';


const ChatBody = () => {

  const userId = "abc123";
  const scrollViewRef = useRef();

  const UserMessageView = ({ message, time }) => {
    return (
      <View style={styles.userContainer}>
        <View style={styles.userInnerContainer}>
          <Text style={styles.usermessage}>{message}</Text>
          <Text style={styles.usermessagetime}>{time}</Text>
          <VectorIcon
            type="Ionicons"
            name="checkmark-sharp"
            color={Colors.primaryColor}
            size={14}
            style={styles.tick}
          />
        </View>
      </View>
    )
  }

  const OtherUserMessageView = ({ message, time }) => {
    return (
      <View style={styles.otherUserContainer}>
        <View style={styles.otherInnerUserContainer}>
          <Text style={styles.otherusermessage}>{message}</Text>
          <Text style={styles.otherusermessagetime}>{time}</Text>
        </View>
      </View>
    )
  }
  const scrollToBottom = () => {
    scrollViewRef.current.scrollToEnd({ Animated: true });
  }
  return (
    <>

      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={scrollToBottom}
        showsVerticalScrollIndicator={false}
        style={styles.container}
        >
        <View>

          <Text style={styles.encryptionmessage}>Messages are not yet {<VectorIcon
            type="MaterialDesignIcons"
            name="lock-open"
            color={Colors.teal}
            size={12}
          />} end-to-end encrypted.

            Be carefull while chatting</Text>
        </View>

        {MessageData.map(item => (
          <>
            {item.id === userId ? (
              <UserMessageView message={item.message} time={item.time} />

            ) : (
              <OtherUserMessageView message={item.message} time={item.time} />
            )}
          </>
        ))}

      </ScrollView>
      <View style={styles.downarrow}>
        <VectorIcon
          type="Feather"
          name="chevrons-down"
          color={Colors.primaryColor}
          size={25}
          onPress={scrollToBottom}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    position:'relative'
  },
  encryptionmessage: {
    backgroundColor: Colors.lowOpacity,
    marginHorizontal: 35,
    marginTop: 15,
    marginBottom: 9,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: Colors.teal,
    textAlign: "center",
    fontSize: 12.5,
    borderRadius: 7,
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 5,
  },
  otherUserContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  userInnerContainer: {
    backgroundColor: Colors.background,
    paddingVertical: '8',
    paddingHorizontal: '15',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  usermessage: {
    color: Colors.tertiary,
    fontSize: 14,
  },

  otherusermessage: {
    color: Colors.white,
    fontSize: 14,
  },
  usermessagetime: {
    color: Colors.teal,
    fontSize: 10,
    marginLeft: 5,
  },
  otherusermessagetime: {
    color: Colors.textColor,
    fontSize: 10,
    marginLeft: 5,
  },
  tick: {
    marginLeft: 8,
  },


  otherInnerUserContainer: {
    backgroundColor: Colors.primaryColor,
    paddingVertical: '8',
    paddingHorizontal: '15',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    flexDirection: 'row',
    alignItems: 'flex-end'

  },
  downarrow:{
    backgroundColor:Colors.lowOpacity,
    width:40,
    height:40,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    bottom:20,
    right:15,

  },
})

export default ChatBody