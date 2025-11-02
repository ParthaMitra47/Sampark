import { View, Text, Animated, StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Colors } from './../theme/Colors';


const ProgressBar = ({ setTimeup }) => {

  const progressAnimation = useRef(new Animated.Value(0)).current;
  // const progressAnimation = new Animated.Value(0);


  const animateProgress = () => {
    Animated.timing(progressAnimation, {
      toValue: 100,
      duration: 7000,
      useNativeDriver: false
    }).start(({ finished }) => {
      if (finished) {
        setTimeup()
        console.log("Animation Stopped and progress bar is full");

      }
    })
  }

  useEffect(() => {
    animateProgress();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.progressBg}>

        <Animated.View style={[styles.progress, {
          width: progressAnimation.interpolate({
            inputRange: [0, 100],
            outputRange: ['0%', '100%'],
          })
        }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progress: {
    width: '100%',
    height: 5,
    backgroundColor: Colors.white,
    borderRadius: 40,
    // marginTop:40,
  },
  container: {
    marginTop: 10,
  },
  progressBg: {
    width: '100%',
    height: 5,
    backgroundColor: Colors.textGrey,
    borderRadius: 40,

  },
})
export default ProgressBar
