import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';

import styles from './Twetting.style';

import User from '../../assets/svgs/user.svg';
import CameraIcon from '../../assets/svgs/cameraIcon.svg';
import Image from '../../assets/svgs/twettImage.svg';
import Image1 from '../../assets/svgs/twettImage1.svg';
import Image2 from '../../assets/svgs/twettImage2.svg';
import Image3 from '../../assets/svgs/twettImage3.svg';
import Bar from '../../assets/svgs/tweetPageBar.svg';

const Twetting = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerComponent}>
        <TouchableOpacity style={styles.button} onPress={goBack}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tweetButton}>
          <Text style={styles.tweetButtonText}>Tweet</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tweetContainer}>
        <User width="40" height="40" />
        <TextInput style={styles.tweetContainerText}>
          What’s happening?
        </TextInput>
      </View>

      <View style={styles.twettImageContainer}>
        <View style={styles.tweetImage}>
          <CameraIcon />
        </View>

        <View style={styles.tweetImage}>
          <Image />
        </View>

        <View style={styles.tweetImage}>
          <Image1 />
        </View>

        <View style={styles.tweetImage}>
          <Image2 />
        </View>

        <View style={styles.tweetImage}>
          <Image3 />
        </View>
      </View>

      <View >
        <Bar width='390' height='50' />
      </View>
    </SafeAreaView>
  );
};

export default Twetting;
