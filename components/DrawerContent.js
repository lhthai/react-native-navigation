import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContent = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={require('../assets/VAC_Logo.png')}
                size={50}
              />
              <View
                style={{
                  marginLeft: 15,
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <Title style={styles.title}>VAC mInventory</Title>
                <Caption style={styles.caption}>Version: 1.0.0</Caption>
              </View>
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
          <Drawer.Section title="Preferences">
            <TouchableRipple>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <Switch />
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      {/* <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon color={color} size={size} name="exit-to-app" />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section> */}
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 12,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 5,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    // borderTopColor: '#f4f4f4',
    // borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 16,
  },
});
export default DrawerContent;
