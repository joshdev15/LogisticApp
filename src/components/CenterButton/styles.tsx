import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
  },
  button: {
    backgroundColor: '#42C2FF',
    width: 75,
    height: 75,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
});

export default styles;
