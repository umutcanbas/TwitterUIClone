import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import styles from './Profile.style';
import Footernavigator from '../../components/FooterNavigator/Footernavigator';
import Button from '../../components/Button/Button';

import BackArrow from '../../assets/svgs/leftArrowIconWhite.svg';
import User from '../../assets/svgs/user.svg';
import Link from '../../assets/svgs/linkIcon.svg';
import Calender from '../../assets/svgs/calendarIcon.svg';

import Tweets from './Tweets/Tweets';
import TweetsAndReplies from './TweetsAndReplies/TweetsAndReplies';
import Media from './Media/Media';
import Likes from './Likes/Likes';

const Tab = createMaterialTopTabNavigator();

const ProfilePage = ({navigation}) => {
  const goTrends = () => {
    navigation.navigate('TrendsPage');
  };
  const goNotification = () => {
    navigation.navigate('NotificationPage');
  };
  const goMessage = () => {
    navigation.navigate('Message');
  };
  const goHome = () => {
    navigation.navigate('HomePage');
  };
  const handleTwetting = () => {
    navigation.navigate('TwettingPage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={goHome} style={styles.button}>
          <BackArrow width={15} height={15}  />
        </TouchableOpacity>
        <Text style={styles.headerText}>Digital Goodies Team</Text>
      </View>

      <View style={styles.userContainer}>
        <View style={styles.userInnerContainer}>
          <View style={styles.user}>
            <User width={70} height={70} />
          </View>
          <Text style={styles.userText}>Pixsellz</Text>

          <Text style={styles.userTagText}>@pixsellz</Text>
        </View>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.detailContainer}>
        <Text>
          Digital Goodies Team - Web & Mobile UI/UX development; Graphics;
          Illustrations
        </Text>
        <View style={styles.detailLinkContainer}>
          <Link />
          <Text style={{color: '#4C9EEB'}}> pixsellz.io </Text>
          <Calender />
          <Text style={styles.followerText}> Joined September 2018</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.followerText}>
            {' '}
            <Text style={styles.followerNumber}>217</Text> Following
          </Text>
          <Text style={styles.followerText}>
            {' '}
            <Text style={styles.followerNumber}>118</Text> Followers
          </Text>
        </View>
      </View>

      <Tab.Navigator
        initialRouteName="List"
        screenOptions={{
          tabBarActiveTintColor: '#4C9EEB',
          tabBarInactiveTintColor: '#687684',
          tabBarLabelStyle: {fontSize: 11},
        }}>
        <Tab.Screen name="Tweets" component={Tweets} />
        <Tab.Screen name="Tweets & replies" component={TweetsAndReplies} />
        <Tab.Screen name="Media" component={Media} />
        <Tab.Screen name="Likes" component={Likes} />
      </Tab.Navigator>

      <Button onPress={handleTwetting} title={'Tweet'} />
      <Footernavigator
        onPressHome={goHome}
        onPressSearch={goTrends}
        onPressNotification={goNotification}
        onPressMessage={goMessage}
      />
    </SafeAreaView>
  );
};

export default ProfilePage;
