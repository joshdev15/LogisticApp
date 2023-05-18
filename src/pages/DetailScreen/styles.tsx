import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mapzone: {
    width: '100%',
    height: 300,
    backgroundColor: '#c0c0c020',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  lineCont: {
    padding: 10,
  },

  statusCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  statusTxt: {
    fontSize: 8,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
});

export default styles;
