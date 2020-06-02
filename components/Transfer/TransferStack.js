import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TransferScreen from './TransferScreen';
import TransferRequest from './TransferRequest';
import TransferRequestDetail from './TransferRequestDetail';
import TransferRequestAdd from './TransferRequestAdd';

const Stack = createStackNavigator();

const TransferStack = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen
      name="Transfer"
      component={TransferScreen}
      options={{
        title: 'Inventory Transfer',
        headerTitleAlign: 'center',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
    <Stack.Screen
      name="TransferRequestList"
      component={TransferRequest}
      options={{title: 'Transfer Request List'}}
    />
    <Stack.Screen
      name="TransferRequestDetail"
      component={TransferRequestDetail}
      options={{title: 'Transfer Request Detail'}}
    />
    <Stack.Screen
      name="TransferRequestAdd"
      component={TransferRequestAdd}
      options={{title: 'Add item'}}
    />
  </Stack.Navigator>
);

export default TransferStack;
