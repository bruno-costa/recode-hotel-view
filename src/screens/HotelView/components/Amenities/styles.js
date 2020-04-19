import {StyleSheet} from 'react-native';
import {colors, utils} from '../../../../styles';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  amenitiesContainer: {
    marginTop: 16,
    marginHorizontal: 16,
    ...utils.rowBetween,
    flexWrap: 'wrap',
  },
  amenityContainer: {
    alignItems: 'center',
    width: 95,
    marginVertical: 12,
  },
  amenity: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    ...utils.center,
    backgroundColor: '#444',
  },
  amenityName: {
    color: colors.highlightSecondary,
    fontSize: 12,
    fontWeight: '600',
    marginTop: 6,
    textAlign: 'center',
  },
});
