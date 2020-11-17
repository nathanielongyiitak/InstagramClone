import React, {useEffect, useState} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Footer = ({likesCount: likesCountProp, caption, postedAt}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const onLikePressed = () => {
    setIsLiked(!isLiked);
    const amount = isLiked ? -1 : 1;
    setLikesCount(likesCount + amount);
  };

  useEffect(() => {
    setLikesCount(likesCountProp);
  }, [likesCountProp]);

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.leftIcons}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            {isLiked ? (
              <ADIcon name="heart" size={25} color="#c30000" />
            ) : (
              <ADIcon name="hearto" size={25} color="#545454" />
            )}
          </TouchableWithoutFeedback>

          <FontistoIcon name="comment" size={23} color="#545454" />

          <IoniconsIcon name="paper-plane-outline" size={25} color="#545454" />
        </View>

        <FAIcon name="bookmark-o" size={25} color="#545454" />
      </View>

      <Text style={styles.likes}>
        {likesCount} {likesCount > 1 ? 'likes' : 'like'}
      </Text>

      <Text style={styles.caption}>{caption}</Text>

      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
};

export default Footer;
