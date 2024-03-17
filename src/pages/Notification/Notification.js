import {View, Text, SafeAreaView ,TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Notification.style';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import User from '../../assets/svgs/user.svg';
import Settings from '../../assets/svgs/settingsIcon.svg';

import All from './All/All';
import Mentions from './Mentions/Mentions';
import Button from '../../components/Button/Button';

const Tab = createMaterialTopTabNavigator();

const Notification = ({navigation}) => {
  const handleTwetting = () => {
    navigation.navigate('TwettingPage');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <User />
        </TouchableOpacity>
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

      <Button title={'Tweet'} onPress={handleTwetting} />
    </SafeAreaView>
  );
};

export default Notification;
