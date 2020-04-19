import {StyleSheet} from 'react-native';
import {colors, patterns, utils} from '../../../../styles';

export default StyleSheet.create({
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
