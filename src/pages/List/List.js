import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import styles from './List.style';
import Subscribe from './Subscribe/Subscribe';
import Member from './Member/Member';
import Button from '../../components/Button/Button';

import BackArrow from '../../assets/svgs/leftArrowIcon.svg';

const Tab = createMaterialTopTabNavigator();

const List = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={goBack}>
          <BackArrow />
        </TouchableOpacity>
        <Text style={styles.headerContainerText}>List</Text>
      </View>

      <Tab.Navigator
        initialRouteName="List"
        screenOptions={{
          tabBarActiveTintColor: '#4C9EEB',
          tabBarInactiveTintColor: '#687684',
          tabBarLabelStyle: {fontSize: 12},
        }}>
        <Tab.Screen name="Subscribe to" component={Subscribe} />

        <Tab.Screen name="Member of" component={Member} />
      </Tab.Navigator>

      <Button title={'List'} />
    </SafeAreaView>
  );
};

export default List;
