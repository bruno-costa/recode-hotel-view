import React from 'react';
import {StatusBar, StyleSheet, Text, View, ScrollView} from 'react-native';

import {colors} from '../../styles/colors';
import Header from './components/Header';
import Bookmark from './components/Bookmark';
import About from './components/About';
import Stats from './components/Stats';
import Amenities from './components/Amenities';
import Address from './components/Address';
import Extras from './components/Extras';

export default function HotelView() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar color="light-content" />
      <Header />
      <View>
        <Bookmark />
        <About />
        <Stats />
        <Amenities />
        <Address />
        <Extras />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
