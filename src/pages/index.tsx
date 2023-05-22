import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ApiProvider from '../contexts/ApiContext';
import AuthScreen from './AuthScreen';
import DetailScreen from './DetailScreen';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

const MainRouter = () => {
  return (
    <ApiProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Auth"
            component={AuthScreen}
            options={{headerShown: false}}
          />

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
    </ApiProvider>
  );
};

export default MainRouter;
