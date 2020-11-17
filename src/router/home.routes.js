import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import logo from '../assets/images/logo.png';
import HomeScreen from '../screens/HomeScreen';
import StoryScreen from '../screens/StoryScreen';

const HomeStack = createStackNavigator();

const HomeRoutes = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Instagram',
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerLeft: () => <Feather name="camera" size={25} color="#000" />,
          headerTitle: () => (
            <Image
              source={logo}
              resizeMode="contain"
              style={{width: 135, height: 50}}
            />
          ),
          headerTitleAlign: 'center',
          headerRight: () => (
            <Ionicons name="paper-plane-outline" size={25} color="#545454" />
          ),
        }}
      />
      <HomeStack.Screen
        name="Story"
        component={StoryScreen}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeRoutes;
