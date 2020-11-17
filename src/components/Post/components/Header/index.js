import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import ProfilePicture from '../../../ProfilePicture';
import styles from './style';

const Header = ({imageUri, name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <ProfilePicture uri={imageUri} size={40} />

        <Text style={styles.name}>{name}</Text>
      </View>

      <View style={styles.right}>
        <Icon name="dots-three-vertical" size={16} />
      </View>
    </View>
  );
};

export default Header;
