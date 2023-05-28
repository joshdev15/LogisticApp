import {Image, ImageBackground, View} from 'react-native';
import Logo from '@images/LogisticAppLogo.png';
import Bg from '@images/bg.png';
import styles from './styles';

const MainHeader = () => {
  return (
    <View style={styles.main}>
      <ImageBackground source={Bg} style={styles.image} resizeMode="cover">
        <Image source={Logo} style={styles.logo} />
      </ImageBackground>
    </View>
  );
};

export default MainHeader;
