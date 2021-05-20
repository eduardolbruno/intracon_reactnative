import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { PhonesScreen } from '../screens/Phones'
import { PhoneDetailScreen } from '../screens/PhoneDetail'


const RootStack = createStackNavigator(
  {
    Phones: PhonesScreen,
    Details: PhoneDetailScreen,
  },
  {
    initialRouteName: 'Phones',
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer
