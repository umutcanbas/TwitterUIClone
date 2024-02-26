import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {} from 'react-native-safe-area-context';

import styles from './Home.style';
import User from '../../assets/svgs/user.svg';
import TwitterLogo from '../../assets/svgs/twitterlogo.svg';
import Stars from '../../assets/svgs/stars.svg';
import HeartIcon from '../../assets/svgs/heartIcon.svg';
import MartaAvatar from '../../assets/svgs/martaCraigIcon.svg';
import Line from '../../assets/svgs/line.svg';
import DownIcon from '../../assets/svgs/line.svg';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <User />
        <TwitterLogo />
        <Stars />
      </View>
      <View style={styles.twittContainer}>
        <View style={styles.likeContainer}>
          <HeartIcon />
          <Text style={styles.likeText}>Kerion Dotson and Zack Jhon liked</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.martaTwittIcon}>
            <MartaAvatar width="70" height="70" />
            <Line />
            <MartaAvatar />
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.userName}>Marta Craig</Text>
            <Text style={styles.userTag}>@craig_love</Text>
            <Text style={styles.twitTime}>12h</Text>
          </View>
        </View>
        <View>
        <Text>
              UXR/UX: You can only bring one item to a remote island to assist
              your research of native use of tools and usability. What do you
              bring? #TellMeAboutYou
            </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
