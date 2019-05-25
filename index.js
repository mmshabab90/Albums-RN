/**
 * @format
 */

import React from 'react';
import {AppRegistry, View} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Component function
const App = () => (
    <View style = {{ flex: 1,}} >
        <Header headerText = {'Taylor Swift Albums'} />
        <AlbumList headerText = {'List of Albums'} />
    </View>
);

AppRegistry.registerComponent(appName, () => App);
