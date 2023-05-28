import {FC} from 'react';
import MapView, {Marker, Polyline, Region} from 'react-native-maps';
import {useColorScheme} from 'react-native';
import {ILocation} from '../../models';
import Truck from '@images/truck.png';
import {encode} from 'base-64';

interface IAppMap {
  region: Region;
  markers: ILocation[];
}

const AppMap: FC<IAppMap> = ({markers, region}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const filteredMarkers = markers.filter(mark => mark.name !== 'location');
  const truckObj = {icon: Truck, image: Truck};

  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      userInterfaceStyle={isDarkMode ? 'dark' : 'light'}
      zoomControlEnabled
      region={region}>
      {markers.map((mark: ILocation) => {
        const {name, latitude, longitude} = mark;
        return (
          <Marker
            key={encode(`${name}-${latitude}${longitude}`)}
            coordinate={{latitude, longitude}}
            {...(name === 'location' && truckObj)}
          />
        );
      })}

      <Polyline
        coordinates={filteredMarkers}
        strokeColor="#000"
        strokeWidth={8}
      />
    </MapView>
  );
};

export default AppMap;
