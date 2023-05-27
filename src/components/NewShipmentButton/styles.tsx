import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
  },
  promo: {
    marginRight: 10,
    width: '70%',
    height: 90,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 5,
  },
  promoInner: {
    justifyContent: 'center',
    width: '110%',
  },
  promoTxt: {
    fontSize: 25,
    fontWeight: '300',
    color: 'black',
  },
  text: {
    fontSize: 10,
  },
  button: {
    backgroundColor: '#42C2FF',
    width: 90,
    height: 90,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
