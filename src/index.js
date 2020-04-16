import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

import {colors} from './styles/colors';
import HotelView from './screens/HotelView';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <HotelView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
  },
});

export default App;
