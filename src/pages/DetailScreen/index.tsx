import {useEffect, useState} from 'react';
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
import MapView, {Marker, Polyline} from 'react-native-maps';
import WayLogo from '../../assets/images/way.png';
import styles from './styles';

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
    return (
      <View style={{...backgroundStyle, ...styles.emptyState}}>
        <AppText text={"We can't find this shipment, sorry..."} />
        <Button text="Back" onPress={goToHome} />
      </View>
    );
  }

  useEffect(() => {
    setRegion({
      latitude: currentShipment.location.lat,
      longitude: currentShipment.location.lng,
      latitudeDelta: 0.07,
      longitudeDelta: 0.07,
    });

    return () => {};
  }, [currentShipment]);

  const status = currentShipment.status.toString();

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <AppStatusBar />
      <View style={styles.mapzone}>
        <View style={styles.mapCont}>
          <MapView
            style={{width: '100%', height: '100%'}}
            userInterfaceStyle={isDarkMode ? 'dark' : 'light'}
            zoomControlEnabled
            region={region}>
            <Marker
              coordinate={{
                latitude: currentShipment.origin.lat,
                longitude: currentShipment.origin.lng,
              }}
            />

            <Marker
              coordinate={{
                latitude: currentShipment.location.lat,
                longitude: currentShipment.location.lng,
              }}
              icon={WayLogo}
              image={WayLogo}
            />

            <Marker
              coordinate={{
                latitude: currentShipment.destination.lat,
                longitude: currentShipment.destination.lng,
              }}
            />

            <Polyline
              coordinates={[
                {
                  latitude: currentShipment.location.lat,
                  longitude: currentShipment.location.lng,
                },
                {
                  latitude: currentShipment.destination.lat,
                  longitude: currentShipment.destination.lng,
                },
              ]}
              strokeColor="#000"
              strokeWidth={10}
            />
          </MapView>
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
