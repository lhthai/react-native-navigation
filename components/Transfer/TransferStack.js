import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import TransferScreen from './TransferScreen';
import TransferRequest from './TransferRequest';
import TransferRequestDetail from './TransferRequestDetail';
import AddItem from './AddItem';

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
      component={TransferRequest}
      options={{
        title: 'Transfer Request',
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
    {/* <Stack.Screen
      name="TransferRequestList"
      component={TransferRequest}
      options={{title: 'Transfer Request List'}}
    /> */}
    <Stack.Screen
      name="TransferRequestDetail"
      component={TransferRequestDetail}
      options={{title: 'Transfer Request Detail'}}
    />
    <Stack.Screen
      name="TransferRequestAdd"
      component={AddItem}
      options={{title: 'Add'}}
    />
  </Stack.Navigator>
);

export default TransferStack;
