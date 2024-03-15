import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import styles from './Home.style';
import User from '../../assets/svgs/user.svg';
import TwitterLogo from '../../assets/svgs/twitterlogo.svg';
import Stars from '../../assets/svgs/stars.svg';
import HeartIcon from '../../assets/svgs/heartIcon.svg';
import MartaAvatar from '../../assets/svgs/martaAvatar.svg';
import Line from '../../assets/svgs/line.svg';
import DownIcon from '../../assets/svgs/downIcon.svg';
import MartaActionButttons from '../../assets/svgs/martaActionButton.svg';

import MaximmilianAvatar from '../../assets/svgs/maximillimAvatar.svg';
import MaximmilianActionBar from '../../assets/svgs/maximilliamActionButton.svg';

import RetweetIcon from '../../assets/svgs/retwettIcon.svg';
import TabithaAvatar from '../../assets/svgs/tabithaAvatar.svg';
import TabithaActionButtons from '../../assets/svgs/tabithaActionButton.svg';
import Tick from '../../assets/svgs/tickIcon.svg';

import KarenneAvatar from '../../assets/svgs/kranneAvatar.svg';
import KarenneActionButtons from '../../assets/svgs/karenneActionButtons.svg';
import Button from '../../components/Button/Button';

const Home = ({navigation}) => {
  const handleTwetting = () => {
    navigation.navigate('TwettingPage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <User />
        </TouchableOpacity>
        <TwitterLogo />
        <Stars />
      </View>
      <ScrollView>
        {/* MARTA TWETT */}
        <View style={styles.twittContainer}>
          <View style={styles.likeContainer}>
            <HeartIcon />
            <Text style={styles.likeText}>
              Kerion Dotson and Zack Jhon liked
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={styles.twittIcon}>
              <MartaAvatar width="50" height="50" />
              <Line />
              <MartaAvatar width="35" height="35" />
            </View>
            <View style={{margin: 5}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.userName}>Marta Craig</Text>
                <Text style={styles.userTag}>@craig_love</Text>
                <Text
                  style={{
                    ...styles.userTag,
                    marginRight: 50,
                  }}>
                  ·12h
                </Text>
                <DownIcon />
              </View>

              <View style={styles.twittTextContainer}>
                <Text style={styles.twittText}>
                  UXR/UX: You can only bring one item to a remote island to
                  assist your research of native use of tools and usability.
                  What do you bring?{' '}
                  <Text style={{color: 'rgb(97, 156, 229)'}}>
                    #TellMeAboutYou
                  </Text>
                </Text>
              </View>

              <View style={{marginTop: 10, marginBottom: 8}}>
                <MartaActionButttons />
              </View>

              <View style={{marginTop: 10}}>
                <Text style={styles.thread}>Show this thread</Text>
              </View>
            </View>
          </View>
        </View>

        {/* MAXİMMİLİAN TWETT */}
        <View style={styles.twittContainer}>
          <View
            style={{
              ...styles.likeContainer,
              marginRight: 183,
            }}>
            <HeartIcon />
            <Text style={styles.likeText}>Zack Jhon liked</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={styles.twittIcon}>
              <MaximmilianAvatar width="50" height="50" />
            </View>

            <View style={{margin: 5}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.userName}>Maximmilian</Text>
                <Text style={styles.userTag}>@maxjacobson</Text>
                <Text
                  style={{
                    ...styles.userTag,
                    marginRight: 30,
                  }}>
                  ·3h
                </Text>
                <DownIcon />
              </View>

              <View style={styles.twittTextContainer}>
                <Text style={styles.twittText}>
                  Y’all ready for this next post?
                </Text>
              </View>

              <View style={{marginTop: 10, marginBottom: 8}}>
                <MaximmilianActionBar />
              </View>
            </View>
          </View>
        </View>
        {/* TABİTHA TWETT */}
        <View style={styles.twittContainer}>
          <View
            style={{
              ...styles.likeContainer,
              marginRight: 125,
            }}>
            <RetweetIcon />
            <Text style={styles.likeText}>Kieron Dotson Retweeted</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                ...styles.twittIcon,
                height: 50,
              }}>
              <TabithaAvatar width="50" height="50" />
            </View>
            <View style={{margin: 5}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.userName}>Tabitha Potter </Text>
                <Tick />
                <Text style={styles.userTag}>@mis_potter</Text>
                <Text
                  style={{
                    ...styles.userTag,
                    marginRight: 10,
                  }}>
                  ·14h
                </Text>
                <DownIcon />
              </View>

              <View style={styles.twittTextContainer}>
                <Text style={styles.twittText}>
                  Kobe’s passing is really sticking w/ me in a way I didn’t
                  expect.{'\n\n'}He was an icon, the kind of person who wouldn’t
                  die this way. My wife compared it to Princess Di’s accident.
                  {'\n\n'}But the end can happen for anyone at any time, & I
                  can’t help but think of anything else lately.{' '}
                </Text>
              </View>

              <View style={{marginTop: 10, marginBottom: 8}}>
                <TabithaActionButtons />
              </View>
            </View>
          </View>
        </View>
        {/* KARENNE TWETT */}
        <View style={{...styles.twittContainer, borderBottomWidth: 0}}>
          <View
            style={{
              ...styles.likeContainer,
              marginRight: 177,
            }}>
            <HeartIcon />
            <Text style={styles.likeText}>Zack Jhone liked</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                ...styles.twittIcon,
                height: 50,
              }}>
              <KarenneAvatar width="50" height="50" />
            </View>
            <View style={{margin: 5}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.userName}>karennne</Text>
                <Text style={styles.userTag}>@karennne</Text>
                <Text
                  style={{
                    ...styles.userTag,
                    marginRight: 10,
                  }}>
                  ·10h
                </Text>
                <DownIcon />
              </View>

              <View style={styles.twittTextContainer}>
                <Text style={styles.twittText}>
                  Name a show where the lead character is the worst character on
                  the show I’ll get Sabrina Spellman{' '}
                </Text>
              </View>

              <View style={{marginTop: 10, marginBottom: 8}}>
                <KarenneActionButtons />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Button onPress={handleTwetting} title={'Tweet'} />
    </SafeAreaView>
  );
};

export default Home;
