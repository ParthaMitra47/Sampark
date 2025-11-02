import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ChatList from '../components/ChatList'
import VectorIcon from './../utils/VectorIcon';
import { Colors } from './../theme/Colors';
import { useNavigation } from '@react-navigation/native';

const ChatListScreen = () => {
  const navigation = useNavigation()

  const onNavigate = () => {
    navigation.navigate('ContactScreen')
  }
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <ChatList />
      </ScrollView>
      <TouchableOpacity style={styles.contactIcon} onPress={onNavigate} >

        <VectorIcon
          type="MaterialDesignIcons"
          name="message-reply-text"
          color={Colors.white}
          size={25}
        />
      </TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: Colors.background,
  },
  contactIcon: {
    backgroundColor: Colors.primaryColor,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,


  }
})

export default ChatListScreen