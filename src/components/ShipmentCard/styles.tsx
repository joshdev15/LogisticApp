import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  ship: {
    margin: 10,
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#42C2FF',
    borderRadius: 10,
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
  lineCont: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shipline: {
    flexDirection: 'column',
    backgroundColor: '#EFFFFD20',
    borderRadius: 4,
    padding: 5,
    margin: 1,
    flex: 1,
  },
  name: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: '300',
  },
  left: {
    color: 'grey',
    fontWeight: '500',
    fontSize: 10.5,
  },
  right: {
    fontSize: 13,
  },
});

export default styles;
