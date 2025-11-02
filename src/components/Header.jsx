import { View, StyleSheet, Text, Image } from 'react-native';
import React from 'react';
// import WhatsappLogo2 from '../assets/WhatsApp_logo.png'
import WhatsappLogo from '../assets/whatsapp-logo.png'
import SamparkLogo from '../assets/Sampark-logo.png'

import { Colors } from '../theme/Colors.js';
import VectorIcon from '../utils/VectorIcon.js';

const Header = () => {
  return (
    <View style={styles.container}>

      {/* <Image source={WhatsappLogo2}/> */}
      <Image
        style={styles.LogoStyle}
        source={SamparkLogo} />

      <View style={styles.headerIcons}>

        <VectorIcon
          type="Feather"
          name="camera"
          color={Colors.secondaryColor}
          size={22}
        />
        <VectorIcon
          type="Ionicons"
          name="search"
          color={Colors.secondaryColor}
          size={21}
          style={styles.iconStyle}
        />

        <VectorIcon
          type="Entypo"
          name="dots-three-vertical"
          color={Colors.secondaryColor}
          size={18}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    padding: 16,
    flexDirection : 'row',
    justifyContent:'space-between',
    
  },

  LogoStyle: {
    height: 25,
    width: 110,
  },

  headerIcons : {
    flexDirection :'row',
    // flex:1,
    // justifyContent:'center',
    alignItems:'center'
    
  },

  iconStyle:{
    marginHorizontal:25,
    
  },
})

export default Header;