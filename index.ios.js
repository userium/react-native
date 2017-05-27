/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
import { AppRegistry, View } from 'react-native';

const App = () => (
    <View style={{ flex: 1 }}>
      <Header headerText={"Albums"} />
      <AlbumList />
    </View>
);

AppRegistry.registerComponent('native', () => App);
