import React from 'react';
import App from './src/App';
import configureStore from './src/store/configureStore';
import DropdownAlert from 'react-native-dropdownalert';
import { AppRegistry, View} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {DropDownHolder} from './src/common/dropalert';

const store = configureStore();
const flex = {flex: 1};
const padding = {padding: 10};

const application = () => {
  return (
    <View style={flex}>
      <Provider store={store}>
        <App />
      </Provider>
      <DropdownAlert
        updateStatusBar={false}
        defaultContainer={padding}
        ref={ref => DropDownHolder.setDropDown(ref)}
        closeInterval={6000}
      />
    </View>
  );
};

AppRegistry.registerComponent(appName, () => application);
 