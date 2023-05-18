import {ScrollView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppStatusBar from '../../components/AppStatusBar';
import Button from '../../components/Button';
import Section from '../../components/Section';
import {useNavigation, useRoute} from '@react-navigation/native';
import ViewTitle from '../../components/ViewTitle';
import {ROUTES} from '../../constants/routes';

const DetailScreen = () => {
  const {navigate} = useNavigation();
  const {params} = useRoute();
  console.log(params);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const getInfo = async () => {
  // try {
  // const res = await fetch('https://rickandmortyapi.com/api/character');
  // const json = await res.json();
  // console.log(json);
  // } catch (e) {
  // console.log(e);
  // }
  // };

  // useEffect(() => {
  // getInfo();
  // }, []);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <Section>
        <AppStatusBar />
        <ViewTitle value="Detail" />
        <Button text="to Home" onPress={() => navigate(ROUTES.HOME)} />
      </Section>
    </ScrollView>
  );
};

export default DetailScreen;
