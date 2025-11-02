import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Profile from '../assets/user1.jpg'
import { Colors } from './../theme/Colors';
import VectorIcon from './../utils/VectorIcon';

const MyStatus = () => {
  return (
    <View style={styles.container}>
      <Image source={Profile} style={styles.profile} />
      <View style={styles.icon}>
        <VectorIcon type="MaterialDesignIcons" name="plus-circle" color={Colors .white} size={20}/>
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.myStatusText}>MyStatus</Text>
        <Text style={styles.addStatus}>Add Status</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
     position:'relative',
    

  },
  profile: {
    height: 50,
    width: 50,
    borderRadius: 50,
   
    
  },
  statusContainer: {
    marginLeft: 15,
  },
  myStatusText: {
    fontSize: 20,
    color: Colors.tertiary,
    fontWeight: 400,
  },
  addStatus: {
    fontSize: 13,
    color: Colors.primaryColor,
    marginTop: 3,
  },
  icon:{
    position:'absolute',
    bottom:0,
    left:34,
  }
  
})

export default MyStatus