import {API, graphqlOperation} from 'aws-amplify';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {listPosts} from '../../../graphql/queries';
import Post from '../Post';
import Stories from '../UserStoriesPreview';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const postsData = await API.graphql(graphqlOperation(listPosts));
      setPosts(postsData.data.listPosts.items);
    } catch (e) {
      console.log('fetchPosts error: ' + e);
    }
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={({id}) => id}
      renderItem={({item}) => <Post post={item} />}
      ListHeaderComponent={Stories}
    />
  );
};

export default Feed;
