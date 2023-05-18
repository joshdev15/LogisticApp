import {ScrollView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppStatusBar from '../../components/AppStatusBar';
import Section from '../../components/Section';
import MainHeader from '../../components/MainHeader';
import ViewTitle from '../../components/ViewTitle';
import ShipmentList from '../../components/ShipmentList';
import {useEffect} from 'react';
import useAPI from '../../hooks/useAPI';
import AuthModal from '../../components/AuthModal';

const HomeScreen = () => {
  const {welcome} = useAPI();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    welcome();
  }, []);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <Section>
        <AuthModal />

        <MainHeader />
        <ViewTitle value="Home - Delivery List" />
        <AppStatusBar />
        <ShipmentList />
      </Section>
    </ScrollView>
  );
};

export default HomeScreen;
