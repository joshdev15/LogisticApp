import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    borderRadius: 10,
    margin: 10,
    height: 150,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 44,
    resizeMode: 'stretch',
  },
});

export default styles;
