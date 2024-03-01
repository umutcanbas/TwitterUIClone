import {View, SafeAreaView, Text} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import ZackAvatar from '../assets/svgs/zackAvatar.svg';


const Draw = props => {
  return (
    <SafeAreaView style={{flex:1}}>
      <DrawerContentScrollView {...props}>
        <View>
         <ZackAvatar/>
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default Draw;
