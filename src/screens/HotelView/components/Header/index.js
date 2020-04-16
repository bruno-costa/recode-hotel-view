import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import {utils} from '../../../../styles';

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
          <AntDesign name="save" size={24} />
          <AntDesign name="sharealt" size={24} />
          <Entypo name="dots-three-vertical" size={18} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageHeader: {
    width: '100%',
    height: 400,
  },
  imageFilter: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#00000040',
  },
  topButtons: {
    ...utils.rowBetween,
    position: 'absolute',
    top: 60,
    left: 32,
    right: 32,
  },
});
