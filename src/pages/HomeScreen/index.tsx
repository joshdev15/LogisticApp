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
import CenterButton from '../../components/CenterButton';
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
        <CenterButton onPress={openModal} />
        <ShipmentModal open={show} setOpen={closeModal} />
        <ViewTitle value="Home - Delivery List" />
        <AppStatusBar />
        <ShipmentList />
      </Section>
    </ScrollView>
  );
};

export default HomeScreen;
