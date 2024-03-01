import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './Notification.style';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import User from '../../assets/svgs/user.svg';
import Settings from '../../assets/svgs/settingsIcon.svg';

import All from './All/All';
import Mentions from './Mentions/Mentions';

const Tab = createMaterialTopTabNavigator();

const Notification = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <User />
        <Text style={styles.headerContainerText}>Notifications</Text>
        <Settings />
      </View>

      <Tab.Navigator
        initialRouteName="Tweets"
        screenOptions={{
          tabBarActiveTintColor: '#4C9EEB',
          tabBarInactiveTintColor: '#687684',
          tabBarLabelStyle: {fontSize: 12},
        }}>
        <Tab.Screen name="All" component={All} />

        <Tab.Screen name="Mentions" component={Mentions} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Notification;