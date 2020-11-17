import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Post from '../Post';
import Stories from '../UserStoriesPreview';

const data = [
  {
    id: '1',
    user: {
      imageUri:
        'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      name: 'Vadim',
    },
    imageUri:
      'https://images.unsplash.com/photo-1554177255-61502b352de3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    caption: 'Beautiful food #instagram',
    likesCount: 1,
    postedAt: '2 minutes ago',
  },
  {
    id: '2',
    user: {
      imageUri:
        'https://images.unsplash.com/photo-1584143369293-c977706992a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80',
      name: 'Lukas',
    },
    imageUri:
      'https://images.unsplash.com/photo-1575900365507-ee022cc4d640?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    caption: 'Beautiful food #instagram',
    likesCount: 1234,
    postedAt: '6 minutes ago',
  },
  {
    id: '3',
    user: {
      imageUri:
        'https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      name: 'Valex',
    },
    imageUri:
      'https://images.unsplash.com/photo-1554433607-66b5efe9d304?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
    caption: 'Beautiful food #instagram',
    likesCount: 1934,
    postedAt: '9 minutes ago',
  },
];

const Feed = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={({id}) => id}
      renderItem={({item}) => <Post post={item} />}
      ListHeaderComponent={Stories}
    />
  );
};

export default Feed;
