import {StyleSheet} from 'react-native';
import {colors, patterns} from '../../../../styles';

export default StyleSheet.create({
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
