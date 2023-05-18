import {ScrollView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppStatusBar from '../../components/AppStatusBar';
import Button from '../../components/Button';
import Section from '../../components/Section';
import {useNavigation} from '@react-navigation/native';
import MainHeader from '../../components/MainHeader';
import ViewTitle from '../../components/ViewTitle';

const HomeScreen = () => {
  const {navigate} = useNavigation();
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
        <Button text="To Detail" onPress={() => navigate('Details')} />
      </Section>
    </ScrollView>
  );
};

export default HomeScreen;
