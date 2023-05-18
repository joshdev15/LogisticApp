// import {FC} from 'react';
import {Modal, ScrollView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import useAPI from '../../hooks/useAPI';
// import AppText from '../AppText';
import Button from '../Button';
import MainHeader from '../MainHeader';
import Section from '../Section';
import ViewTitle from '../ViewTitle';

// interface IAuthModal {
// visible: boolean;
// }

const AuthModal = () => {
  const {auth, isLogin, forceAuth} = useAPI();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onSubmit = () => {
    auth();
  };

  const forceLogin = () => {
    forceAuth();
  };

  return (
    <Modal visible={!isLogin}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Section>
          <ViewTitle value="Login" />
          <MainHeader />
          <Button text="Login" onPress={onSubmit} />
          <Button text="Force Login" onPress={forceLogin} />
        </Section>
      </ScrollView>
    </Modal>
  );
};

export default AuthModal;
