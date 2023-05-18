import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from './DetailScreen';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

const MainRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRouter;
