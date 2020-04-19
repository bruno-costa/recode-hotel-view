import {StyleSheet} from 'react-native';
import {colors, utils} from '../../../../styles';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    width: 56,
    height: 56,
    right: 32,
    top: -56 / 2,
    backgroundColor: colors.text,
    ...utils.center,
    borderRadius: 56 / 2,
    zIndex: 10,
  },
});
