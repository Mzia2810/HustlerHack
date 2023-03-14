import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#05F000'}}>
        <Image
          resizeMode="contain"
          source={require('../assets/logo.png')}
          style={{width: 202, height: 39, marginVertical: 20, marginHorizontal: 30}}
        />
        <View style={{backgroundColor: '#fff'}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
