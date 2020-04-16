import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import {colors, utils} from '../../../../styles';

export default function Bookmark() {
  return (
    <View style={styles.container}>
      <Feather name="bookmark" size={24} color={colors.pink} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 56,
    height: 56,
    right: 32,
    top: -56 / 2,
    backgroundColor: colors.text,
    ...utils.center,
    borderRadius: 56 / 2,
    zIndex: 10,
  },
});
