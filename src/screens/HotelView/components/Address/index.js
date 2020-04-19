import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import {colors, patterns} from '../../../../styles';
import Pin from './Pin';

const imgSrc =
  'https://maps.googleapis.com/maps/api/staticmap?center=-23.573974357945307%2C-46.64269789540958&zoom=15&size=600x400&style=feature%3Apoi%7Celement%3Alabels%7Cvisibility%3Aoff&maptype=roadmap&key=AIzaSyD4uiaXREZyuJjGpz2eVbaVOxFTkzsJI7I';

export default function Address() {
  return (
    <View>
      <View style={styles.imageMapContainer}>
        <Image source={{uri: imgSrc}} style={styles.imageMap} />
      </View>

      <View style={styles.addressContainer}>
        <Pin />

        <View style={styles.addressContainerText}>
          <Text style={patterns.sectionTitle}>Address</Text>
          <Text style={styles.addressText}>
            1252 Taylor Street, New York NY{`\n`}10011, United States
          </Text>

          <View style={styles.actionButtonContainer}>
            <TouchableOpacity style={styles.checkButton}>
              <Text style={patterns.smallText}>Check it</Text>
              <Entypo
                name="chevron-right"
                size={12}
                color={colors.text}
                style={styles.checkButtonIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  imageMapContainer: {
    backgroundColor: '#000',
  },
  imageMap: {
    height: 200,
    opacity: 0.2,
  },
  addressContainer: {
    ...StyleSheet.absoluteFill,
    flexDirection: 'row',
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  addressContainerText: {
    marginLeft: 8,
    marginTop: 24,
  },
  addressText: {
    ...patterns.smallText,
    marginTop: 6,
    letterSpacing: 1,
    lineHeight: 20,
  },
  actionButtonContainer: {
    marginTop: 16,
  },
  checkButtonIcon: {
    marginLeft: 4,
  },
  checkButton: {
    ...patterns.button,
    alignSelf: 'flex-start',
  },
});
