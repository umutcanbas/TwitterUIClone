import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';

const Draw = (props) => {
  return (
    <SafeAreaView>
      <DrawerContentScrollView {...props}>
        <Text>Draw</Text>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default Draw;
