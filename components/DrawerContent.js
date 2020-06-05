import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContent = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={{flex: 1}}>
          <View style={{paddingLeft: 10}}>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Image
                source={require('../assets/AC_Logo.png')}
                style={{width: '100%', height: 45}}
              />
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bank-transfer-in" color={color} size={size} />
              )}
              label="Goods Receipt"
              onPress={() => {
                // props.navigation.navigate('Settings');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bank-transfer-out" color={color} size={size} />
              )}
              label="Goods Issue"
              onPress={() => {
                // props.navigation.navigate('Account');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bank-transfer" color={color} size={size} />
              )}
              label="Inventory Transfer"
              onPress={() => {
                props.navigation.navigate('Transfer');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="format-list-bulleted" color={color} size={size} />
              )}
              label="Physical Count"
              onPress={() => {
                // props.navigation.navigate('Account');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon color={color} size={size} name="exit-to-app" />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerSection: {
    marginTop: 5,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
});
export default DrawerContent;
