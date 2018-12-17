import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

const bgColorWhite = '#F5FCFF';
const bgColorDarkGray = '#4f5051';

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgColorWhite,
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 20,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
  },

  author: {
    fontSize: 13,
    width: '100%',
    paddingBottom: 10,
    color: bgColorDarkGray,
  },

  hr: {
    minHeight: 0.3,
    backgroundColor: bgColorDarkGray,
    marginBottom: 10,
  },

  text: {
    fontSize: 13,
  },
});

const Post = ({
  id, title, author, text,
}) => (
  <View style={styles.container} key={id}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.author}>{author}</Text>
    <View style={styles.hr} />
    <Text style={styles.text}>{text}</Text>
  </View>
);

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Post;
