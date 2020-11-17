import React from 'react';
import {StyleSheet, View} from 'react-native';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

const Post = ({post}) => {
  return (
    <View>
      <Header imageUri={post.user.imageUri} name={post.user.name} />
      <Body imageUri={post.imageUri} />
      <Footer
        likesCount={post.likesCount}
        caption={post.caption}
        postedAt={post.postedAt}
      />
    </View>
  );
};

export default Post;
