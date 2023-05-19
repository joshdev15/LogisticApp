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
import MapView, {Marker, Callout} from 'react-native-maps';
import styles from './styles';

const DetailScreen = () => {
  const {currentShipment} = useAPI();
  const {navigate} = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const goToHome = () => navigate(ROUTES.HOME);

  if (!currentShipment) {
    return (
      <View style={{...backgroundStyle, ...styles.emptyState}}>
        <AppText text={"We can't find this shipment, sorry..."} />
        <Button text="Back" onPress={goToHome} />
      </View>
    );
  }

  const status = currentShipment.status.toString();

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
          <Callout>
            <Marker
              coordinate={{
                latitude: currentShipment.location.lat,
                longitude: currentShipment.location.lng,
              }}
            />
          </Callout>
        </MapView>
      </View>

      <Section>
        <ViewTitle value={`Details of ${currentShipment.id}`} />
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
