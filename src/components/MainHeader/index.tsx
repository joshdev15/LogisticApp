import {Image, ImageBackground, View} from 'react-native';
import Logo from '../../assets/images/LogisticAppLogo.png';
import Bg from '../../assets/images/bg.png';
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
