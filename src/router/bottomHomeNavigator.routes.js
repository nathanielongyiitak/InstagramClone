import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreatePostScreen from '../screens/CreatePostScreen';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeStackScreen from './home.routes';

const Tab = createBottomTabNavigator();

const BottomHomeNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return <Foundation name="home" size={size} color={color} />;
          }
          if (route.name === 'Discovery') {
            return <Feather name="search" size={size} color={color} />;
          }
          if (route.name === 'Post') {
            return <Feather name="plus-square" size={size} color={color} />;
          }
          if (route.name === 'Notifications') {
            return <AntDesign name="hearto" size={size} color={color} />;
          }
          if (route.name === 'Profile') {
            return <Ionicons name="person-outline" size={size} color={color} />;
          }

          // You can return any component that you like here!
        },
      })}
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Discovery" component={DiscoveryScreen} />
      <Tab.Screen name="Post" component={CreatePostScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomHomeNavigator;
