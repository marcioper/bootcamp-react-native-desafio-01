import React, { Component } from 'react';
import {
  Platform, StyleSheet, View, ScrollView, Text,
} from 'react-native';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

import Post from '~/components/Post';

const bgColorWhite = '#FFFFFF';
const bgColorRed = '#df7d7a';
const bgColorDarkGray = '#4f5051';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColorWhite,
  },

  header: {
    backgroundColor: bgColorWhite,
    justifyContent: 'center',
    alignItems: 'center',
    // No iOS precisamos aplicar 20px de padding superior
    // já que a Status Bar não joga o conteúdo do App
    // pra baixo automaticamente
    ...Platform.select({
      ios: {
        height: 76,
        paddingTop: 20,
      },
      android: {
        height: 56,
        paddingTop: 0,
      },
    }),
  },

  headerTitle: {
    color: bgColorDarkGray,
    fontSize: 16,
    fontWeight: 'bold',
  },

  scroll: {
    backgroundColor: bgColorRed,
  },
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Marcio Pereira Pinto',
        text:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Marcio Pereira Pinto',
        text:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        author: 'Marcio Pereira Pinto',
        text:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>GoNative App</Text>
        </View>
        <ScrollView style={styles.scroll}>
          {posts.map(obj => (
            <Post key={obj.id} id={obj.id} title={obj.title} author={obj.author} text={obj.text} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
