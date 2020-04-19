import {StyleSheet} from 'react-native';
import {colors, patterns} from '../../../../styles';

export default StyleSheet.create({
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
