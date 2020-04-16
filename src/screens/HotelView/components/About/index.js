import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {colors, utils, patterns} from '../../../../styles';

const hotel = {
  name: 'Mt. Catlin Hotel',
  price: '$965',
  location: 'New York',
  about:
    'Beatae consequatur dolore eius error exercitationem expedita harum ' +
    'hic iusto maiores. Alias assumenda eius enim necessitatibus nobis, quisquam rem soluta vitae.',
};

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={patterns.title}>{hotel.name}</Text>
      <Text style={styles.info}>
        {hotel.price} &#8226; {hotel.location}
      </Text>
      <View style={utils.divider} />
      <Text style={patterns.sectionTitle}>About {hotel.name}</Text>
      <Text style={styles.about}>{hotel.about}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...patterns.sectionContainer,
    backgroundColor: colors.background,
  },
  info: {
    color: colors.textSecondary,
    fontWeight: '600',
    marginTop: 4,
  },
  about: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textSecondary,
    marginTop: 6,
    lineHeight: 20,
  },
});
