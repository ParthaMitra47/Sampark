import {View} from 'react-native';
import React from 'react';
// import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
// import { FontAwesome5 } from "@react-native-vector-icons/fontawesome5"; //correct
// import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
// import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { Feather } from "@react-native-vector-icons/feather";
import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";
import { FontAwesome5 } from "@react-native-vector-icons/fontawesome5";
import {EvilIcons} from '@react-native-vector-icons/evil-icons';
import {Ionicons} from '@react-native-vector-icons/ionicons';
import {Entypo} from '@react-native-vector-icons/entypo';
import {MaterialDesignIcons} from '@react-native-vector-icons/material-design-icons';
// import AntDesign from 'react-native-vector-icons/dist/AntDesign';
// import Octicons from 'react-native-vector-icons/dist/Octicons';
// import Fontisto from 'react-native-vector-icons/dist/Fontisto';

const VectorIcon = (props) => {
  const {name, size, color, type, onPress, style} = props;
  return (
    <View style={style}>
      {
      type === 'Feather' ? (
        <Feather
          onPress={onPress}
          name={name}
          size={size}
          color={color}
        />
      ) : 
      type === 'EvilIcons' ? (
        <EvilIcons
         onPress={onPress}
         name={name}
         size={size} 
         color={color} 
         />
      ) :
       type === 'Ionicons' ? 
      (
        <Ionicons onPress={onPress} name={name} size={size} color={color} />
      ) :type === 'Entypo' ? 
      (
        <Entypo onPress={onPress} name={name} size={size} color={color} />
      ): type === 'FontAwesome5' ? 
      (
        <FontAwesome5 onPress={onPress} name={name} size={size} color={color} />
      ): type === 'MaterialIcons' ? 
      (
        <MaterialIcons onPress={onPress} name={name} size={size} color={color} />
      ): type === 'MaterialDesignIcons' ? 
      (
        <MaterialDesignIcons onPress={onPress} name={name} size={size} color={color} />
      ):
      // ) : type === 'Feather' ? 
      // (
      //   <Feather onPress={onPress} name={name} size={size} color={color} />
      // ) : type === 'AntDesign' ? 
      // (
      //   <AntDesign onPress={onPress} name={name} size={size} color={color} />
      // ) : type === 'Entypo' ? 
      // (
      //   <Entypo onPress={onPress} name={name} size={size} color={color} />
      // ) : type === 'Ionicons' ? 
      // (
      //   <Ionicons onPress={onPress} name={name} size={size} color={color} />
      // ) : type === 'EvilIcons' ? 
      // (
      //   <EvilIcons onPress={onPress} name={name} size={size} color={color} />
      // ) : type === 'Octicons' ? 
      // (
      //   <Octicons onPress={onPress} name={name} size={size} color={color} />
      // ) : type === 'Fontisto' ? 
      // (
      //   <Fontisto onPress={onPress} name={name} size={size} color={color} />
      // ) : 
      (
        <FontAwesome6
          onPress={onPress}
          name={name}
          size={size}
          color={color}
        />
      )}
    </View>
  );
};

export default VectorIcon;