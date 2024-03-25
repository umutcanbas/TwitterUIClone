import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';

import styles from './KrenneTweet.style';
import User from '../../../assets/svgs/user.svg';
import KranneAvatar from '../../../assets/svgs/kranneAvatar.svg';
import KeironAvatar from '../../../assets/svgs/keironAvatar.svg';
import DownIcon from '../../../assets/svgs/downIcon.svg';
import BackArrow from '../../../assets/svgs/leftArrowIcon.svg';
import CommentIcon from '../../../assets/svgs/commentStrokeIcon.svg';
import ShareIcon from '../../../assets/svgs/shareStrokeIcon.svg';
import HeartIcon from '../../../assets/svgs/heartStrokeIcon.svg';
import RetweetIcon from '../../../assets/svgs/retweetStrokeIcon.svg';
import Line from '../../../assets/svgs/line.svg';
import Dots from '../../../assets/svgs/dotsIcon.svg';

import Home from '../../../assets/svgs/homePageIconActive.svg';
import Search from '../../../assets/svgs/searchPageIcon.svg';
import Notification from '../../../assets/svgs/notificationPageIcon.svg';
import Message from '../../../assets/svgs/messagePageIcon.svg';

import Modal from '../../../components/Modal/Modal';

const KrenneTweet = ({navigation}) => {
  const [inputModalVisible, setInputModalVisible] = React.useState(false);

  const handleModalClose = () => {
    setInputModalVisible(!inputModalVisible);
  };

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
      {/* Kranne Tweet */}
      <View style={{borderColor: 'grey', borderTopWidth: 0.2}}>
        <View style={styles.likeContainer}>
          <RetweetIcon width="15" height="15" />
          <Text style={styles.likeText}>The UX Person Retweeted</Text>
        </View>
      </View>

      <View style={styles.twittContainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.twittIcon}>
            <KranneAvatar width="50" height="50" />
          </View>
          <View style={{margin: 5}}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={styles.userName}>karennne</Text>
                <Text style={styles.userTag}>@karennne</Text>
              </View>
              <View style={{marginLeft: 200}}>
                <DownIcon />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.twittTextContainer}>
          <Text style={styles.twittText}>
            ~~ hiring for a UX Lead in Sydney - who should I talk to?
          </Text>
        </View>

        <View style={styles.component}>
          <Text style={styles.userTag}>
            09:28 · 2/21/20 · <Text style={styles.link}>Twitter Web App</Text>
          </Text>
        </View>

        <View style={styles.component}>
          <Text style={styles.userTag}>
            <Text style={styles.userName}>6</Text> Retweets
          </Text>
          <Text style={styles.userTag}>
            <Text style={styles.userName}>15</Text> Likes
          </Text>
        </View>
        <View style={styles.actionButtons}>
          <CommentIcon />
          <TouchableOpacity onPress={handleModalClose}>
            <RetweetIcon />
          </TouchableOpacity>
          <HeartIcon />
          <ShareIcon />
        </View>
      </View>

      {/* Reply1 */}

      <View style={{borderColor: 'grey', borderTopWidth: 0.2 }}>
        <View style={styles.replyTwittContainer}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.twittIcon}>
              <KeironAvatar width="50" height="50" />
              <Line width="10" height="90" />
            </View>
            <View style={{margin: 5}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.userName}>kiero_d</Text>
                <Text style={styles.userTag}>@kiero_d</Text>
                <Text style={styles.userTag}>·2d</Text>
                <View style={{marginLeft: 125}}></View>
                <DownIcon />
              </View>
              <Text style={styles.replyInnerText}>
                Replying to <Text style={styles.link}>@karennne</Text>
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.replyTwittTextContainer}>
          <Text style={styles.replyTwittText}>
            Interesting Nicola that not one reply or tag on this{' '}
            <Text style={styles.link}>#UX</Text> talent shout out in the 24hrs
            since your tweet here......🤔
          </Text>
        </View>
      </View>
      <View style={styles.replyActionButtons}>
        <View style={{flexDirection: 'row'}}>
          <CommentIcon width="15" height="15" />
          <Text> 1</Text>
        </View>
        <TouchableOpacity onPress={handleModalClose}>
          <RetweetIcon width="19" height="19" />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <HeartIcon width="15" height="15" />
          <Text> 1</Text>
        </View>
        <ShareIcon width="15" height="15" />
      </View>

      {/* Reply 2 */}
      <View style={{flexDirection: 'row'}}>
        <View style={styles.kranneReplyTwittContainer}>
          <View style={styles.twittIcon}>
            <KranneAvatar width="50" height="50" />
            <Line width="10" height="90" />
          </View>
          <View style={{margin: 5}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.userName}>karennne </Text>
              <Text style={styles.userTag}>@karennne</Text>
              <Text style={styles.userTag}>·2d</Text>
              <View style={{marginLeft: 90}}></View>
              <DownIcon />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.krenneReplyTwittTextContainer}>
        <Text style={styles.replyTwittText}>
          Maybe I forgot the hashtags.
          <Text style={styles.link}>
            #hiringux #designjobs #sydneyux #sydneydesigners #uxjobs
          </Text>
        </Text>
      </View>
      <View style={styles.replyActionButtons}>
        <View style={{flexDirection: 'row'}}>
          <CommentIcon width="15" height="15" />
          <Text> 1</Text>
        </View>
        <TouchableOpacity onPress={handleModalClose}>
          <RetweetIcon width="19" height="19" />
        </TouchableOpacity>
        <HeartIcon width="15" height="15" />
        <ShareIcon width="15" height="15" />
      </View>
      <View style={{marginLeft: 42,marginTop:20, justifyContent: 'center'}}>
        <Dots />
        <Text style={{...styles.link, marginHorizontal: 35, fontSize: 17 , marginTop:-15}}>
          1 more reply
        </Text>
      </View>

      {/* Footer */}

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

      <Modal visible={inputModalVisible} onClose={handleModalClose} />
    </SafeAreaView>
  );
};

export default KrenneTweet;
