import {
  ScrollView,
  useColorScheme,
  View,
  PermissionsAndroid,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppStatusBar from '../../components/AppStatusBar';
import Button from '../../components/Button';
import Section from '../../components/Section';
import {useNavigation, useRoute} from '@react-navigation/native';
import ViewTitle from '../../components/ViewTitle';
import {ROUTES} from '../../constants/routes';
import AppText from '../../components/AppText';
import styles from './styles';
import {currentIcon, ShipLine} from '../../components/ShipmentCard';
import useAPI from '../../hooks/useAPI';
import {useEffect, useState} from 'react';
import {IShipment} from '../../models';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-svg';
import Arrived from '../../assets/svg/arrived';

const DetailScreen = () => {
  const {shipments} = useAPI();
  const {navigate} = useNavigation();
  const {params}: any = useRoute();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const [currentShipment, setCurrentShipment] = useState<IShipment>();

  useEffect(() => {
    if (shipments) {
      const tmpShipment = shipments.find(ship => ship.id === params.id);
      setCurrentShipment(tmpShipment);
    }
  }, [shipments]);

  if (!currentShipment) {
    return (
      <View>
        <AppText text={"We can't find this shipment, sorry..."} />
      </View>
    );
  }

  const status = currentShipment.status.toString();

  requestLocationPermission();

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <AppStatusBar />
      <View style={styles.mapzone}>
        <MapView
          style={{width: '100%', height: '100%'}}
          initialRegion={{
            latitude: 4.702104,
            longitude: -74.040982,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: currentShipment.location.lat,
              longitude: currentShipment.location.lng,
            }}
          />
        </MapView>
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

        <Button text="Back" onPress={() => navigate(ROUTES.HOME)} />
      </Section>
    </ScrollView>
  );
};

export default DetailScreen;
