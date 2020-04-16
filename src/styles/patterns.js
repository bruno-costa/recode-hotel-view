import {StyleSheet} from 'react-native';
import {colors} from './colors';

export const patterns = StyleSheet.create({
  title: {
    color: colors.text,
    fontSize: 20,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 15,
    color: colors.text,
  },
  sectionContainer: {
    paddingVertical: 24,
    paddingHorizontal: 32,
    marginBottom: 8,
    backgroundColor: colors.highlightSecondary,
  },
});
