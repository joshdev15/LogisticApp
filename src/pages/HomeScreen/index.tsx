import {ScrollView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppStatusBar from '../../components/AppStatusBar';
import Section from '../../components/Section';
import MainHeader from '../../components/MainHeader';
import ViewTitle from '../../components/ViewTitle';
import ShipmentList from '../../components/ShipmentList';
import {useEffect, useState} from 'react';
import useAPI from '../../hooks/useAPI';
import AuthModal from '../../components/AuthModal';
import NewShipmentButton from '../../components/NewShipmentButton';
import ShipmentModal from '../../components/ShipmentModal';

const HomeScreen = () => {
  const {welcome} = useAPI();
  const [show, setShow] = useState<boolean>(false);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

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
        <NewShipmentButton onPress={openModal} />
        <AppStatusBar />
        <ShipmentList />
        <ShipmentModal open={show} closeModal={closeModal} />
      </Section>
    </ScrollView>
  );
};

export default HomeScreen;
