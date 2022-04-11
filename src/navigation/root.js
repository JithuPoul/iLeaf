import 'react-native-gesture-handler';
import React from 'react';
import MainNavigation from './navigation';
import {Provider} from 'react-redux';
import {store} from '../redux/store';
import {enableScreens} from 'react-native-screens';
enableScreens();

const Root = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default Root;
