import {StyleSheet} from 'react-native';
import {utils} from '../../../../styles';

export default StyleSheet.create({
  imageHeader: {
    width: '100%',
    height: 400,
  },
  imageFilter: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#00000040',
  },
  topButtons: {
    ...utils.rowBetween,
    position: 'absolute',
    top: 60,
    left: 32,
    right: 32,
  },
});
