import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import StoryScreen from '../screens/StoryScreen';
import bottomHomeNavigator from './bottomHomeNavigator.routes';

const RootStack = createStackNavigator();

const Router = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Home"
        component={bottomHomeNavigator}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="Story"
        component={StoryScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default Router;
