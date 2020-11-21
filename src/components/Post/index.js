import React from 'react';
import {View} from 'react-native';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

const Post = ({post}) => {
  return (
    <View>
      <Header imageUri={post.image} name={post.user.name} />
      <Body imageUri={post.image} />
      <Footer
        likesCount={post.likes}
        caption={post.caption}
        postedAt={post.createdAt}
      />
    </View>
  );
};

export default Post;
