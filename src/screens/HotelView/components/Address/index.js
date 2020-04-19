import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import {GOOGLE_MAPS_KEY} from '../../../../env';
import {colors, patterns} from '../../../../styles';
import Pin from './Pin';
import styles from './styles';

const imgSrc =
  'https://maps.googleapis.com/maps/api/staticmap?center=-23.573974357945307%2C-46.64269789540958&zoom=15&size=600x400&style=feature%3Apoi%7Celement%3Alabels%7Cvisibility%3Aoff&maptype=roadmap&key=' +
  GOOGLE_MAPS_KEY;

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
