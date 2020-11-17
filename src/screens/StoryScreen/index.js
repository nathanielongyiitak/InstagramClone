import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfilePicture from '../../components/ProfilePicture';
import storiesData from '../../data/stories';
import styles from './styles';

const StoryScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const userId = route.params.userId;

  const [userStories, setUserStories] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);
  const [activeStory, setActiveStory] = useState(null);

  useEffect(() => {
    const uStories = storiesData.find(
      (storyData) => storyData.user.id === userId,
    );

    setUserStories(uStories);
    setActiveStoryIndex(0);
  }, [userId]);

  useEffect(() => {
    if (userStories) {
      setActiveStory(userStories.stories[activeStoryIndex]);
    }
  }, [activeStoryIndex, userStories]);

  const navigateToNextUser = () => {
    navigation.navigate('Story', {
      userId: (parseInt(userId, 10) + 1).toString(),
    });
  };

  const navigateToPreviousUser = () => {
    navigation.navigate('Story', {
      userId: (parseInt(userId, 10) - 1).toString(),
    });
  };

  const handleNextStory = () => {
    if (activeStoryIndex >= userStories.stories.length - 1) {
      if (userId < storiesData.length) {
        navigateToNextUser();
      }
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePreviousStory = () => {
    if (activeStoryIndex === 0) {
      if (userId > 1) {
        navigateToPreviousUser();
      }
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  };

  const handlePress = (evt) => {
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;
    const isRight = x > screenWidth / 2;
    isRight ? handleNextStory() : handlePreviousStory();
  };

  if (!activeStory) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <ImageBackground
          source={{uri: activeStory.imageUri}}
          style={styles.image}>
          <View style={styles.userInfo}>
            <ProfilePicture uri={userStories.user.imageUri} size={50} />
            <Text style={styles.userName}>{userStories.user.name}</Text>
            <Text style={styles.postedTime}>{activeStory.postedTime}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.cameraButton}>
              <Feather name="camera" size={30} color="#ffffff" />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                editable
                placeholder="Send message"
                placeholderTextColor="white"
              />
            </View>
            <View style={styles.messageButton}>
              <Ionicons name="paper-plane-outline" size={30} color="#ffffff" />
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default StoryScreen;
