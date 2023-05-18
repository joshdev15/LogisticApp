/**
 * @format
 */
import {name as appName} from './app.json';
import {AppRegistry} from 'react-native';
import MainRouter from './src/pages';

const App = () => <MainRouter />;

AppRegistry.registerComponent(appName, () => App);
