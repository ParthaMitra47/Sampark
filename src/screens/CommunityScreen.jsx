import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import ComminityImg from '../assets/community-img.png'
import { Colors } from './../theme/Colors';
const CommunityScreen = () => {
  return (
    <View style={styles.container} >
      <Image style={styles.ComminityImg} source ={ComminityImg}/>
      <Text style={styles.community}>Introducing communities</Text>
      <Text style={styles.subText}>Easily organize your related groups and send announcements. Now your communities, like your neighbourhood or schools, can have their own space.</Text>

      <TouchableOpacity style={styles.buttonStyle} >
        <Text style={styles.buttonTitle}>Start Your Community</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.background,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  ComminityImg:{
    height:150,
    width:250,
  },
  community:{
    fontSize:20,
    fontWeight:'500',
    marginTop:40,
    color: Colors.tertiary

  },
  subText:{
    color: Colors.tertiary,
    fontSize:15,
    textAlign:'center',
    paddingHorizontal:20,
    marginTop:7,
    lineHeight: 19,
    // letterSpacing: 0.6,

  },
  buttonStyle:{
    backgroundColor: Colors.tertiary,
    marginTop: 30,
    padding: 9,
    borderRadius: 30,
    width: '80%'
  },
  buttonTitle:{
    color: Colors.background,
    textAlign:'center',
    fontSize:15,
    fontWeight:'500',


  },
})

export default CommunityScreen