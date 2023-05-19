import {ChangeEvent, useEffect, useState} from 'react';
import {
  Modal,
  ScrollView,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import useAPI from '../../hooks/useAPI';
import AppText from '../AppText';
import Button from '../Button';
import Field from '../Field';
import MainHeader from '../MainHeader';
import Section from '../Section';
import ViewTitle from '../ViewTitle';
import styles from './styles';

const AuthModal = () => {
  const {auth, isLogin, forceAuth} = useAPI();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [user, setUser] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);

  const onSubmit = () => {
    auth(user, pass);
  };

  const forceLogin = () => {
    forceAuth();
  };

  useEffect(() => {
    console.log('fieldValues', user, pass);

    if (![''].includes(user) && ![''].includes(pass)) {
      setDisabled(false);
    }
  }, [user, pass]);

  return (
    <Modal visible={!isLogin}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Section>
          <ViewTitle value="Login" />
          <MainHeader />

          <Field
            value={user}
            onChangeText={(e: string) => setUser(e)}
            placeholder={'User'}
          />
          <Field
            value={pass}
            onChangeText={(e: string) => setPass(e)}
            placeholder={'Password'}
          />

          <Button text="Login" onPress={onSubmit} disabled={disabled} />
          <TouchableOpacity onPress={forceLogin} style={styles.forceCont}>
            <AppText text="Force Login" style={styles.forceTxt} />
          </TouchableOpacity>
        </Section>
      </ScrollView>
    </Modal>
  );
};

export default AuthModal;
