import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ProfilePicture from '../ProfilePicture';
import styles from './styles';

const Story = (props) => {
  const {
    story: {
      user: {id, image, name},
    },
  } = props;

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Story', {userId: id});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <ProfilePicture uri={image} />
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Story;
