import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';

import styles from './PixellsTweet.style';

import User from '../../../assets/svgs/user.svg';
import DownIcon from '../../../assets/svgs/downIcon.svg';
import BackArrow from '../../../assets/svgs/leftArrowIcon.svg';
import CommentIcon from '../../../assets/svgs/commentStrokeIcon.svg';
import ShareIcon from '../../../assets/svgs/shareStrokeIcon.svg';
import HeartIcon from '../../../assets/svgs/heartStrokeIcon.svg';
import RetweetIcon from '../../../assets/svgs/retweetStrokeIcon.svg';
import ActivityIcon from '../../../assets/svgs/activityIcon.svg';

import Home from '../../../assets/svgs/homePageIconActive.svg';
import Search from '../../../assets/svgs/searchPageIcon.svg';
import Notification from '../../../assets/svgs/notificationPageIcon.svg';
import Message from '../../../assets/svgs/messagePageIcon.svg';

const PixellsTweet = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <BackArrow />
        </TouchableOpacity>
        <Text style={styles.headerContainerText}>Tweet</Text>
      </View>

      <View style={styles.twittContainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.twittIcon}>
            <User width="50" height="50" />
          </View>
          <View style={{margin: 5}}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={styles.userName}>Pixsellz</Text>
                <Text style={styles.userTag}>@pixsellz</Text>
              </View>
              <View style={{marginLeft: 200}}>
                <DownIcon />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.twittTextContainer}>
          <Text style={styles.twittText}>Must have icon collections</Text>
        </View>

        <View style={styles.ımageContainer}>
          <View
            style={{
              ...styles.ımageBorderContainer,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}>
            <Image
              source={require('../../../assets/svgs/ımageProfile2png.png')}
              resizeMode="contain"
              style={{
                width: 80,
                height: 80,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
              }}
            />
          </View>
          <View
            style={{
              ...styles.ımageBorderContainer,
              width: 200,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              width: 250,
            }}>
            <Text style={{marginHorizontal: 5}}>
              The Best Free Icon Packs Everyone Must Download in 2020 |
              GraphicM...{'\n\n'}
              <Text style={styles.userTag}>graphicmama.com</Text>
            </Text>
          </View>
        </View>

        <View style={styles.component}>
          <Text style={styles.userTag}>
            17:18 · 2/14/20 · <Text style={styles.link}>Twitter Web App</Text>
          </Text>
        </View>
        <View style={styles.component}>
          <ActivityIcon />
          <Text style={{marginLeft: 10}}>View Tweet activity</Text>
        </View>
        <View style={styles.component}>
          <Text style={styles.userTag}>
            <Text style={styles.userName}>1</Text> Like
          </Text>
        </View>
        <View style={styles.actionButtons}>
          <CommentIcon />
          <RetweetIcon />
          <HeartIcon />
          <ShareIcon />
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: 'rgb(232, 236, 240)'}}></View>

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
export default PixellsTweet;
