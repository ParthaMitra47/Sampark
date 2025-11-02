import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import CommunityScreen from './../screens/CommunityScreen';
import CommunityScreen from '../screens/CommunityScreen';
// import ChatListScreen from '../screens/ChatListScreen';
// import StatusListScreen from '../screens/StatusListScreen';
// import CallListScreen from '../screens/CallListScreen';
import Test from '../screens/Test';
import { Colors } from './../theme/Colors';
import VectorIcon from './../utils/VectorIcon';
import { TabBarData } from './../data/TabbarData';

const Tab = createMaterialTopTabNavigator();

const TopTabbar = () => {
  return (

    <Tab.Navigator
    initialRouteName="Chats"
      //Fixed for All Screen
      // screenOptions={{ //Same configuration is applied to all screens.
      //   tabBarLabelStyle: { fontSize: 12 },
      //   tabBarItemStyle: { width: 100 },
      //   tabBarStyle: { backgroundColor: Colors.primaryColor },
      // }}

      //--------------------
      //Dynamic Per Screen
      // You can change options dynamically based on:
      // the route name
      // navigation params
      // conditions (like dark mode, authentication, etc.)

      screenOptions={() => ({
        tabBarActiveTintColor: Colors.secondaryColor,
        tabBarInactiveTintColor: Colors.background                                                                                                                                                       ,
        

        tabBarIndicatorStyle: {
          backgroundColor: Colors.tertiary,
          
        },

        tabBarStyle: {
          backgroundColor: Colors.primaryColor,
          

        }
      })}
    >
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => ( // color coming from tababaractive/ not active color
            <VectorIcon
              type="Feather"
              name="users"
              size={20}
              color={color}
            />
          ),
        }}
      />

      {TabBarData.map(tab => (
        <Tab.Screen key={tab.id} name={tab.name} component={tab.route} />
      ))}
      {/* <Tab.Screen name="Test" component={Test} /> */}
      {/* <Tab.Screen name="Status" component={StatusListScreen} /> */}
      {/* <Tab.Screen name="Calls" component={CallListScreen} /> */}

    </Tab.Navigator>

  )
}

export default TopTabbar;