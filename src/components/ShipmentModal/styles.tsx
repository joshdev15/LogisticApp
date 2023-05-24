import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'red',
  },
  buttonCont: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  closeButton: {
    width: 70,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontWeight: '600',
  },
  mapzone: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapCont: {
    width: '100%',
    height: 300,
    backgroundColor: '#c0c0c020',
    borderRadius: 20,
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  warning: {
    backgroundColor: '#f5c44730',
    borderRadius: 12,
    padding: 10,
    margin: 10,
  },
});

export default styles;
