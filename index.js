/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { Provider as StoreProvider } from 'react-redux'
import {name as appName} from './app.json';

export default function Main () {
      return (
        <StoreProvider>
          <App/>
        </StoreProvider>
      )
    }

AppRegistry.registerComponent(appName, () => App);
