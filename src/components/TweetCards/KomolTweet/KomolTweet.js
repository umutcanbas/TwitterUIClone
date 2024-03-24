import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';

import styles from './KomolTweet.style';
import User from '../../../assets/svgs/user.svg';
import KomolAvatar from '../../../assets/svgs/komolAvatar.svg';
import DownIcon from '../../../assets/svgs/downIcon.svg';
import BackArrow from '../../../assets/svgs/leftArrowIcon.svg';
import RetweetIcon from '../../../assets/svgs/retweetStrokeIcon.svg';
import Polygon from '../../../assets/svgs/polygonImage.svg';
import Home from '../../../assets/svgs/homePageIconActive.svg';
import Search from '../../../assets/svgs/searchPageIcon.svg';
import Notification from '../../../assets/svgs/notificationPageIcon.svg';
import Message from '../../../assets/svgs/messagePageIcon.svg';

const KomolTweet = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={goBack}>
          <BackArrow />
        </TouchableOpacity>
        <Text style={styles.headerContainerText}>Tweet</Text>
      </View>
      <View style={{borderColor: 'grey', borderTopWidth: 0.2}}>
        <View style={styles.likeContainer}>
          <RetweetIcon width="15" height="15" />
          <Text style={styles.likeText}>You Retweeted </Text>
        </View>
      </View>

      <View style={styles.twittContainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.twittIcon}>
            <KomolAvatar width="50" height="50" />
          </View>
          <View style={{margin: 5}}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={styles.userName}>Komol Kuchkarov</Text>
                <Text style={styles.userTag}>@kkuchkarov</Text>
              </View>
              <View style={{marginLeft: 200}}>
                <DownIcon />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.twittTextContainer}>
          <Text style={styles.twittText}>
            Quickly create a low-fi wireframe version of your web projects with
            ready-to-use layouts of Scheme Constructor.{'\n\n'}
            <Text>
              Get it now on 👉{' '}
              <Text style={styles.link}>constructor.pixsellz.io</Text>
            </Text>
          </Text>
        </View>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/svgs/komolTweetImage.png')}
          resizeMode="contain"
          style={{
            width: 400,
            height: 330,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
          }}
        />
        <View style={styles.polygon}>
          <View style={styles.polygonContainer}>
            <Polygon width="17" height="17" />
          </View>
        </View>
      </View>
      {/* Footer */}

        <View style={styles.searchContainer}>
        <User />
        <TextInput style={styles.searchBar} placeholder="Add another Tweet" />
      </View>

      <View style={styles.footer}>
        <Home />
        <Search />
        <Notification />
        <Message />
      </View>
    </SafeAreaView>
  );
};

export default KomolTweet;
