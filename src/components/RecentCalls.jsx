import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Colors } from './../theme/Colors';
import User2 from '../assets/user2.jpg'
import VectorIcon from './../utils/VectorIcon';
import { RecentCallsData } from './../data/RecentCallsData';



const RecentCalls = () => {
  return (
    <>
      <Text style={styles.recent}>Recent</Text>

      {
        RecentCallsData.map(item => (
          <View style={styles.container}>
            <View style={styles.row}>

              <Image style={styles.imgStyle} source={item.profileImg} />

              <View style={styles.linkSection} >
                <Text style={styles.callLink} >{item.name}</Text>
                <View style={styles.callDetails}>

                {item.incoming ? (
                  item.success ? (
                    <VectorIcon type="Feather" name="arrow-down-left" color={Colors.green} size={20} style={styles.icons} />
                  ):(
                    <VectorIcon type="Feather" name="arrow-down-left" color={Colors.red} size={20} style={styles.icons} />
                  )
                  
                
                ) : (
                  item.success ? (
                    <VectorIcon type="Feather" name="arrow-up-right" color={Colors.green} size={20} style={styles.icons} />
                  ):(
                    <VectorIcon type="Feather" name="arrow-up-right" color={Colors.red} size={20} style={styles.icons} />
                  )
                )}

                <Text style={styles.shareLink}>{item.time}</Text>
                </View>
              </View>
            </View>
            {item.audio && 
            <VectorIcon type="Ionicons" name="videocam" color={Colors.primaryColor} size={26} style={styles.icons} />
            }
            {item.video && 
            <VectorIcon type="Entypo" name="phone" color={Colors.primaryColor} size={26} style={styles.icons} />
            }
          </View>
        ))
      }

    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical:13,
  },
  recent: {
    fontSize: 14,
    color: Colors.tertiary,
    marginTop: 20,
    paddingBottom: 10,
  },
  imgStyle: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  callDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:3,
  },
  callLink: {
    fontSize: 15,
    color: Colors.tertiary,
    fontWeight: '500'
  },
  shareLink: {
    fontSize: 13,
    color: Colors.teal,
    marginTop: 3,
    fontWeight: '500'
  },
  linkSection: {
    marginLeft: 15,
  }
})
export default RecentCalls