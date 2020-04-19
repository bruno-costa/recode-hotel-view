import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import {utils} from '../../../../styles';
import styles from './styles';

export default function Header() {
  return (
    <View>
      <ImageBackground
        source={require('../../../../assets/hotel_68184730.jpg')}
        style={styles.imageHeader}>
        <View style={styles.imageFilter} />
      </ImageBackground>
      <View style={styles.topButtons}>
        <AntDesign name="close" size={24} color="#fff" />
        <View style={utils.rowCenter}>
          <AntDesign name="save" size={24} color="#fff" />
          <AntDesign name="sharealt" size={24} color="#fff" />
          <Entypo name="dots-three-vertical" size={18} color="#fff" />
        </View>
      </View>
    </View>
  );
}
