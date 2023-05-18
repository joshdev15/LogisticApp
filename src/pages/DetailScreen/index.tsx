import {ScrollView, useColorScheme, View} from 'react-native';
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

const DetailScreen = () => {
  const {shipments} = useAPI();
  const {navigate} = useNavigation();
  const {params}: any = useRoute();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
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

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <AppStatusBar />
      <View style={styles.mapzone}>
        <AppText text="Map Zone" />
        <AppText text={`Latitude: ${currentShipment.location.lat}`} />
        <AppText text={`Longitude: ${currentShipment.location.lng}`} />
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
