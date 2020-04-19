import React from 'react';
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {colors} from '../../../../styles';
import styles from './styles';

export default function Bookmark() {
  return (
    <View style={styles.container}>
      <Feather name="bookmark" size={24} color={colors.pink} />
    </View>
  );
}
