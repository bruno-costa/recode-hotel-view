import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../../../styles';

export default function Circle(props) {
  return <View style={[styles.circle, props.style]} />;
}

const styles = StyleSheet.create({
  circle: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    borderWidth: 2,
    borderColor: colors.backgroundSecondary,
  },
});
