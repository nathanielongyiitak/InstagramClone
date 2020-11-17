import React from 'react';
import {Text, View} from 'react-native';

const CreatePostScreen = () => {
  return (
    <View style={{backgroundColor: 'blue', height: 1500}}>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 300,
          fontSize: 30,
          color: 'white',
        }}>
        Create Post
      </Text>
    </View>
  );
};

export default CreatePostScreen;
