import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ContactHeader from './../components/ContactHeader';
import { useNavigation } from '@react-navigation/native';
import VectorIcon from './../utils/VectorIcon';
import { Colors } from './../theme/Colors';
import ContactList from './../components/ContactList';
import { ScrollView } from 'react-native-gesture-handler';

const ContactScreen = () => {

 

  return (
    <ScrollView>
      <ContactHeader />
      <ContactList/>
    </ScrollView>
  )

}
const styles = StyleSheet.create({
  container: {
    backgroundColor:Colors.primaryColor,
    paddingVertical:15,
    paddingHorizontal:10,
    flexDirection:'row',


  },
})

export default ContactScreen

