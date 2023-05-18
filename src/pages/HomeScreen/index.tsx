import {ScrollView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppStatusBar from '../../components/AppStatusBar';
import Section from '../../components/Section';
import MainHeader from '../../components/MainHeader';
import ViewTitle from '../../components/ViewTitle';
import ShipmentList from '../../components/ShipmentList';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <Section>
        <MainHeader />
        <ViewTitle value="Home - Delivery List" />
        <AppStatusBar />
        <ShipmentList />
      </Section>
    </ScrollView>
  );
};

export default HomeScreen;
