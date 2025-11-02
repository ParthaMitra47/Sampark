import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Status1 from '../assets/user5.jpg'
import { Colors } from './../theme/Colors';
import { RecentStatusData } from './../data/RecentStatusData';
import FullModal from './../utils/FullModal';

// '''''''''''''''''''
const RecentStatus = () => {

  const setTimeup = (itemId) => {
    setShowStatusModal(prev => ({...prev, [itemId]: false}))
  }
  
  const [showStatusModal, setShowStatusModal] = useState({});


  const viewStatus = (itemId) =>{
    setShowStatusModal(prev => ({...prev, [itemId]:true}));
  }

  return (
    <View>
      <Text style={styles.recentUpdates}>Recent Updates</Text>
      {
        RecentStatusData.map(item => (
          <>
            <TouchableOpacity
            onPress={() => viewStatus(item.id)}>
              <View style={styles.storySection}>


                <View style={styles.imageStory}>
                  <Image source={item.storyImg} style={styles.statuStyle} />
                </View>

                <View style={styles.imageInfo}>

                  <Text style={styles.username}>{item.name}</Text>
                  <Text style={styles.usertime}>{item.time}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <FullModal 
            setShowStatusModal={setShowStatusModal} 
            showStatusModal={showStatusModal[item.id]} 
            item ={item} 
            setTimeup={()=> setTimeup(item.id)} />
          </>
          //   <FullModal 
          //   setShowStatusModal={value =>setShowStatusModal(prev=> ({...prev, [item.id]:value}))} 
          //   showStatusModal={showStatusModal[item.id]} 
          //   item ={item} 
          //   setTimeup={()=> setTimeup(item.id)} />
          // </>
        ))
      }

    </View>
  )
}


const styles = StyleSheet.create({
  statuStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: Colors.background,

  },
  recentUpdates: {
    fontSize: 14.5,
    color: Colors.tertiary,
    paddingBottom: 10,
    paddingTop: 20,
  },
  imageStory: {
    height: 55,
    width: 55,
    backgroundColor: Colors.primaryColor,
    borderColor: Colors.primaryColor,
    borderRadius: 50,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  username: {
    fontSize: 16,
    color: Colors.tertiary,
    fontWeight: 500,
    // marginTop:13,
  },
  usertime: {
    fontSize: 13,
    color: Colors.teal,
    marginTop: 3,
  },
  storySection: {
    flexDirection: 'row',
    marginTop: 15,
  },
  imageInfo: {
    marginLeft: 15,
  },

})
export default RecentStatus



