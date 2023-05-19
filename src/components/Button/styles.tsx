import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#42C2FF',
    margin: 10,
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  txt: {
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  btnDisabled: {
    backgroundColor: '#c0c0c090',
    margin: 10,
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  txtDisabled: {
    color: 'black',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});

export default styles;
