import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DrawerContent from './components/DrawerContent';
import HomeStack from './components/Home/HomeStack';
import TransferStack from './components/Transfer/TransferStack';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Transfer" component={TransferStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
