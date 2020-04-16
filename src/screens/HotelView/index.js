import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../styles/colors';
import Header from './components/Header';
import Bookmark from './components/Bookmark';

export default function HotelView() {
  return (
    <View style={styles.container}>
      <StatusBar color="light-content" />
      <Header />
      <View>
        <Bookmark />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
