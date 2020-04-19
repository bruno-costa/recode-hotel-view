import React from 'react';
import {View, StyleSheet} from 'react-native';

import {utils} from '../../../../styles';

export default function Pin() {
  return (
    <View style={styles.circle1}>
      <View style={styles.circle2}>
        <View style={styles.circle3} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circle1: {
    width: 64,
    height: 64,
    borderRadius: 64 / 2,
    ...utils.center,
    backgroundColor: 'rgba(121,121,121,0.10)',
  },
  circle2: {
    width: 38,
    height: 38,
    borderRadius: 38 / 2,
    ...utils.center,
    backgroundColor: 'rgba(125,52,76,0.51)',
  },
  circle3: {
    width: 16,
    height: 16,
    borderRadius: 16 / 2,
    backgroundColor: 'rgb(255,0,151)',
    borderColor: '#fff',
    borderWidth: 2,
  },
});
