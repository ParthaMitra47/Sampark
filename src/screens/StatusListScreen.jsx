import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MyStatus from './../components/MyStatus';
import RecentStatus from './../components/RecentStatus';
import ViewedStatus from './../components/ViewedStatus';
import { Colors } from './../theme/Colors';
import { ScrollView } from 'react-native-gesture-handler';

const StatusListScreen = () => {
  return (
    <ScrollView  contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} style={styles.container}>
      <MyStatus/>
      <RecentStatus/>
      <ViewedStatus/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.background,
    padding:6,
  },
})
export default StatusListScreen