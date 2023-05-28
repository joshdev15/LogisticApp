import {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity, useColorScheme, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Section from '@components/Section';
import MainHeader from '@components/MainHeader';
import ViewTitle from '@components/ViewTitle';
import Field from '@components/Field';
import Button from '@components/Button';
import AppText from '@components/AppText';
import useAPI from '@hooks/useAPI';
import {ROUTES} from '@constants/routes';
import styles from './styles';

const AuthScreen = () => {
  const {auth, isLogin, forceAuth} = useAPI();
  const {navigate} = useNavigation();
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
    if (![''].includes(user) && ![''].includes(pass)) {
      setDisabled(false);
    }
  }, [user, pass]);

  useEffect(() => {
    if (isLogin) {
      navigate(ROUTES.HOME);
    }
  }, [isLogin]);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <Section>
        <ViewTitle value="Login" />
        <MainHeader />
        <View style={styles.warning}>
          <AppText text="Temporaly you only can login with" />
          <AppText text='* User: "admin"' />
          <AppText text='* Password: "admin"' />
        </View>

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
  );
};

export default AuthScreen;
