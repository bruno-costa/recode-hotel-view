import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors, patterns} from '../../../../styles';

export default function Extras() {
  const extras = [
    'Payment at Checkout',
    'WI-FI Network is off bt 12:00pm',
    'No swimming after 10:00pm',
    'No more than 2 bags of luggage',
    'No signing while showering',
    'No Refunds',
  ];
  return (
    <View style={styles.container}>
      <Text style={patterns.sectionTitle}>Before you go</Text>

      <View style={styles.list}>
        {extras.map((value, index) => {
          return (
            <Text key={index} style={styles.listItem}>
              &ndash; {value}
            </Text>
          );
        })}
      </View>

      <View style={styles.actionButtonContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonLabel}>Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...patterns.sectionContainer,
    marginTop: 8,
    marginBottom: 64,
  },
  list: {
    marginTop: 16,
    marginLeft: 8,
  },
  listItem: {
    color: colors.textSecondary,
    marginVertical: 8,
  },
  actionButtonContainer: {
    marginTop: 32,
    marginBottom: -40,
  },
  filterButtonLabel: {
    fontWeight: '700',
    color: colors.text,
  },
  filterButton: {
    ...patterns.button,
  },
});
