import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './Trends.style';
import SearchBar from '../../components/SearchBar/SearchBar';

import User from '../../assets/svgs/user.svg';
import Settings from '../../assets/svgs/settingsIcon.svg';
import Button from '../../components/Button/Button';

const Trends = ({navigation}) => {
  const handleTwetting = () => {
    navigation.navigate('TwettingPage');
  };

  const handleSearch = () => {
navigation.navigate('SearchPage')
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <User />
        <SearchBar
          placeholder="Search Twitter"
          inputContainer={{width: 270}}
          onPress={handleSearch}
        />
        <Settings />
      </View>

     
          <View style={styles.headerTextContainer}>
            <Text style={styles.title}>Trends for you</Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textHeader}>No new trends for you </Text>
            <View style={{height: 70, width: 300}}>
              <Text style={styles.text}>
                It seems like there’s not a lot to show you right now, but you
                can see trends for other areas
              </Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Change Location</Text>
            </TouchableOpacity>
          </View>

          <View style={{flex: 1, backgroundColor: '#E7ECF0'}}></View>
          <Button title={'Tweet'} onPress={handleTwetting} />
      
    </SafeAreaView>
  );
};

export default Trends;
