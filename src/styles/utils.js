import {StyleSheet} from 'react-native';

export const utils = StyleSheet.create({
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    borderBottomColor: '#444',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 24,
  },
});
