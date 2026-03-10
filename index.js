import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Kërkohet në HTML një element me id="root"
AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root')
});