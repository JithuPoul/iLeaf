import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './root';
import Dashboard from '../screens/Dashboard';
import DetailsScreen  from '../screens/DetailsScreen';
import UserScreen  from '../screens/UserScreen';
const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none" initialRouteName="OnBoarding">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
