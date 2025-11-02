import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import ChatHeader from './../components/ChatHeader';
import ChatBody from './../components/ChatBody';
import ChatFooter from './../components/ChatFooter';
import Wallpaper from '../assets/wallpaper.jpeg'
const ChatScreen = () => {
  return (
    <>
      <ChatHeader/>
      <ImageBackground source={Wallpaper} style={styles.wallpaper}>
        <ChatBody/>
      </ImageBackground>
      <ChatFooter/>
    </>
  )
}

const styles = StyleSheet.create({
  // container:{
  //   height:'100%'
  // },
  wallpaper:{
    flex:1,
    paddingHorizontal:12,
      // height:'80%'
  },

})

export default ChatScreen