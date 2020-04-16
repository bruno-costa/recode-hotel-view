import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import {patterns, colors, utils} from '../../../../styles';

export default function Amenities() {
  return (
    <View style={patterns.sectionContainer}>
      <Text style={patterns.sectionTitle}>Amenities</Text>

      <View style={styles.amenitiesContainer}>
        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Feather name="wifi" size={24} color={colors.highlightSecondary} />
          </View>
          <Text style={styles.amenityName}>WI-FI</Text>
        </View>
        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Ionicons
              name="md-restaurant"
              size={24}
              color={colors.highlightSecondary}
            />
          </View>
          <Text style={styles.amenityName}>Hotel Restaurant</Text>
        </View>
        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <FontAwesome5
              name="swimmer"
              size={20}
              color={colors.highlightSecondary}
            />
          </View>
          <Text style={styles.amenityName}>Swimming Pools</Text>
        </View>
        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Entypo name="drink" size={24} color={colors.highlightSecondary} />
          </View>
          <Text style={styles.amenityName}>Bar</Text>
        </View>
        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Ionicons
              name="ios-car"
              size={24}
              color={colors.highlightSecondary}
            />
          </View>
          <Text style={styles.amenityName}>Parking Spot</Text>
        </View>
        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Feather
              name="speaker"
              size={24}
              color={colors.highlightSecondary}
            />
          </View>
          <Text style={styles.amenityName}>Night Club</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  amenitiesContainer: {
    marginTop: 16,
    marginHorizontal: 16,
    ...utils.rowBetween,
    flexWrap: 'wrap',
  },
  amenityContainer: {
    alignItems: 'center',
    width: 95,
    marginVertical: 12,
  },
  amenity: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    ...utils.center,
    backgroundColor: '#444',
  },
  amenityName: {
    color: colors.highlightSecondary,
    fontSize: 12,
    fontWeight: '600',
    marginTop: 6,
    textAlign: 'center',
  },
});
