import {FC, useEffect, useState} from 'react';
import {ScrollView, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppStatusBar from '../../components/AppStatusBar';
import Button from '../../components/Button';
import Section from '../../components/Section';
import {useNavigation} from '@react-navigation/native';
import ViewTitle from '../../components/ViewTitle';
import {ROUTES} from '../../constants/routes';
import AppText from '../../components/AppText';
import {currentIcon, ShipLine} from '../../components/ShipmentCard';
import useAPI from '../../hooks/useAPI';
import EmptyState from '../../components/EmptyState';
import styles from './styles';
import AppMap from '../../components/AppMap';

const initialRegion = {
  latitude: 4.702429,
  longitude: -74.0440309,
  latitudeDelta: 0.07,
  longitudeDelta: 0.07,
};

const DetailScreen = () => {
  const {currentShipment} = useAPI();
  const [region, setRegion] = useState(initialRegion);
  const {navigate} = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const goToHome = () => {
    navigate(ROUTES.HOME);
    setRegion(initialRegion);
  };

  if (!currentShipment) {
    const emptyStyles = {...backgroundStyle, ...styles.emptyState};
    return <EmptyState {...{style: emptyStyles, goToHome}} />;
  }

  useEffect(() => {
    const ride = currentShipment.ride;
    let location = ride.find(mark => mark.name === 'location');
    if (!location) {
      location = ride[0];
    }

    setRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.07,
      longitudeDelta: 0.07,
    });
  }, [currentShipment]);

  const status = currentShipment.status.toString();
  const {ride} = currentShipment;

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
      style={backgroundStyle}>
      <AppStatusBar />
      <View style={styles.mapzone}>
        <View style={styles.mapCont}>
          <AppMap markers={ride} region={region} />
        </View>
      </View>

      <Section>
        <ViewTitle value={`Details of ${currentShipment.name}`} />
        <View style={styles.lineCont}>
          <ShipLine keyValue="Author" value={currentShipment.author} />
          <ShipLine keyValue="Owner" value={currentShipment.owner} />
          <ShipLine keyValue="Cost" value={`${currentShipment.cost}`} />
          <View style={styles.statusCont}>
            <AppText text={`Status: ${status}`} style={styles.statusTxt} />
            {currentIcon[status]}
          </View>
        </View>

        <Button text="Back" onPress={goToHome} />
      </Section>
    </ScrollView>
  );
};

export default DetailScreen;
