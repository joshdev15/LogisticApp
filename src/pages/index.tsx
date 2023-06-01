import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import ApiProvider from '../contexts/ApiContext';
import AuthScreen from './AuthScreen';
import DetailScreen from './DetailScreen';
import HomeScreen from './HomeScreen';
import TestScreen from './TestScreen';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'dodgerblue',
    secondary: 'yellow',
  },
};

const Stack = createNativeStackNavigator();

const MainRouter = () => {
  return (
    <PaperProvider theme={theme}>
      <ApiProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Auth">
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

            <Stack.Screen
              name="Test"
              component={TestScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ApiProvider>
    </PaperProvider>
  );
};

export default MainRouter;
