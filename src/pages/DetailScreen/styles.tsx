import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
  lineCont: {
    padding: 10,
  },
  statusCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    backgroundColor: '#EFFFFD05',
    borderRadius: 4,
    padding: 5,
  },
  statusTxt: {
    fontSize: 8,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
