import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import {colors, utils, patterns} from '../../../../styles';
import Circle from './Circle';

const starColors = ['#e3ab53', '#e3ab53', '#e3ab53', '#e3ab53', '#8b6f43'];

export default function Stats() {
  return (
    <View style={styles.container}>
      <View style={styles.weatherContainer}>
        <Feather name="sun" size={24} color={colors.highlightSecondary} />

        <View style={styles.weatherTextContainer}>
          <Text style={styles.title}>22°</Text>
          <Text style={styles.subtitle}>Sunny</Text>
        </View>
      </View>
      <View>
        <Text style={styles.title}>
          8.4
          <Text style={[styles.subtitle, {paddingLeft: 8}]}>
            {'  '} +6k votes
          </Text>
        </Text>

        <View style={utils.rowCenter}>
          {starColors.map((value, index) => (
            <Entypo
              key={index}
              name="star"
              size={14}
              color={value}
              style={{marginHorizontal: 2}}
            />
          ))}
        </View>
      </View>
      <View style={styles.circlesContainer}>
        <Circle
          style={{backgroundColor: '#999', zIndex: 3, marginRight: -10}}
        />
        <Circle
          style={{backgroundColor: '#888', zIndex: 2, marginRight: -10}}
        />
        <Circle
          style={{backgroundColor: '#777', zIndex: 1, marginRight: -10}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...patterns.sectionContainer,
    ...utils.rowCenter,
  },
  weatherContainer: {
    ...utils.rowCenter,
    paddingRight: 12,
    marginRight: 12,
    borderRightColor: '#444',
    borderRightWidth: StyleSheet.hairlineWidth,
  },
  weatherTextContainer: {
    marginLeft: 8,
  },
  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 10,
    fontWeight: '800',
  },
  circlesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
