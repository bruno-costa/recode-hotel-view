import {StyleSheet} from 'react-native';
import {patterns} from '../../../../styles';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  imageMapContainer: {
    backgroundColor: '#000',
  },
  imageMap: {
    height: 200,
    opacity: 0.2,
  },
  addressContainer: {
    ...StyleSheet.absoluteFill,
    flexDirection: 'row',
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  addressContainerText: {
    marginLeft: 8,
    marginTop: 24,
  },
  addressText: {
    ...patterns.smallText,
    marginTop: 6,
    letterSpacing: 1,
    lineHeight: 20,
  },
  actionButtonContainer: {
    marginTop: 16,
  },
  checkButtonIcon: {
    marginLeft: 4,
  },
  checkButton: {
    ...patterns.button,
    alignSelf: 'flex-start',
  },
});
