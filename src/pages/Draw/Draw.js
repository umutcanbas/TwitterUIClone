import {View, SafeAreaView, Text ,TouchableOpacity} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';

import styles from './Draw.style';

import User from '../../assets/svgs/user.svg';
import SecondAccount from '../../assets/svgs/accountImage1.svg';
import ThirdAccount from '../../assets/svgs/accountImage2.svg';
import BottomRightIcon from '../../assets/svgs/drawerRightIcon.svg';
import BottomLeftIcon from '../../assets/svgs/drawerLeftIcon.svg';
import ProfileIcon from '../../assets/svgs/profileStrokeIcon.svg';
import ListIcon from '../../assets/svgs/listsIcon.svg';
import TopicsIcon from '../../assets/svgs/topicsStroke Icon.svg';
import MomentsIcon from '../../assets/svgs/momentsIcon.svg';
import BookMarksIcon from '../../assets/svgs/bookmarksIcon.svg';
import Menu from '../../assets/svgs/menuIcon.svg';

const Draw = (props, {navigation}) => {
  const handlePage = name => {
    props.navigation.navigate(name);
  };
  return (
    <SafeAreaView style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => handlePage('ProfilePage')}>
            <User width="60" height="60" />

            <Text style={styles.userNameText}>Pixsellz</Text>
            <Text style={styles.userTagText}>@pixsellz</Text>
          </TouchableOpacity>

          <View style={styles.users}>
            <SecondAccount width="30" height="30" />
            <ThirdAccount width="30" height="30" />
            <TouchableOpacity>
              <Menu width="30" height="30" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.followerContainer}>
          <Text style={styles.followerNumberText}>216</Text>
          <Text style={styles.followerText}> Following</Text>
          <Text style={styles.followerNumberText}>117</Text>
          <Text style={styles.followerText}> Followers</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePage('ProfilePage')}>
            <ProfileIcon width="16.5" height="20.5" />
            <Text style={styles.buttonText}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePage('ListPage')}>
            <ListIcon width="16.5" height="20.5" />
            <Text style={styles.buttonText}>List</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <TopicsIcon width="16.5" height="20.5" />
            <Text style={styles.buttonText}>Topics</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <BookMarksIcon width="16.5" height="20.5" />
            <Text style={styles.buttonText}>Bookmarks</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{...styles.button, marginBottom: 20}}>
            <MomentsIcon width="16.5" height="20.5" />
            <Text style={styles.buttonText}>Moments</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.appInfoContainer}>
          <TouchableOpacity
            onPress={() => handlePage('SettingsAndPrivacyPage')}>
            <Text style={styles.appInfoText}>Settings and privacy</Text>
          </TouchableOpacity>
          <Text style={styles.appInfoText}>Help Center</Text>
        </View>
      </DrawerContentScrollView>

      <View style={styles.footer}>
        <BottomLeftIcon />
        <BottomRightIcon/>
      </View>
    </SafeAreaView>
  );
};

export default Draw;
