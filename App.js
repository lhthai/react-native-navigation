import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabsScreen from './components/MainTabsScreen'
import DrawerContent from './components/DrawerContent'
import TransferStack from './components/Transfer/TransferStack'

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={MainTabsScreen} />
        <Drawer.Screen name="Transfer" component={TransferStack} />
        {/* <Drawer.Screen name="Detail" component={DetailStackScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
