import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './All.style';

import PrupleStar from '../../../assets/svgs/purpleStarIcon.svg';
import AllNotificationAvatar1 from '../../../assets/svgs/allNotificationAvatar1.svg';
import AllNotificationAvatar2 from '../../../assets/svgs/allNotificationAvatar2.svg';
import AllNotificationAvatar3 from '../../../assets/svgs/allNotificationAvatar3.svg';
import DownIcon from '../../../assets/svgs/downIcon.svg';
const All = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* First twitt */}
        <View style={styles.twittContainer}>
          <View style={styles.header}>
            <View style={{flexDirection: 'row'}}>
              <PrupleStar />

              <View style={{marginLeft: 10}}>
                <AllNotificationAvatar1 />
              </View>
            </View>
            <View style={{marginRight: 10}}>
              <DownIcon />
            </View>
          </View>

          <View style={{paddingLeft: 10}}>
            <Text style={{...styles.text, marginBottom: 10}}>
              In case you missed{' '}
              <Text style={{fontWeight: 'bold', color: 'black'}}>
                {' '}
                Saad Drusteer
              </Text>{' '}
              ’s Tweet{' '}
            </Text>

            <View>
              <Text style={styles.text}>
                🔥 Are you using WordPress and migrating to the JAMstack? I
                wrote up a case study about how Smashing Magazine moved to
                JAMstack and saw great performance improvements and better
                security.{'\n\n'}
                www.smashingdrusteer.com/2020/01/migrat...
              </Text>
            </View>
          </View>
        </View>
        {/* Second twitt */}
        <View style={styles.twittContainer}>
          <View style={styles.header}>
            <View style={{flexDirection: 'row'}}>
              <PrupleStar />

              <View style={{marginLeft: 10}}>
                <AllNotificationAvatar2 />
              </View>
            </View>
            <View style={{marginRight: 10}}>
              <DownIcon />
            </View>
          </View>

          <View style={{paddingLeft: 10}}>
            <Text style={{...styles.text, marginBottom: 10}}>
              In case you missed{' '}
              <Text style={{fontWeight: 'bold', color: 'black'}}>
                {' '}
                UX Upper
              </Text>{' '}
              ’s Tweet{' '}
            </Text>

            <View>
              <Text style={styles.text}>
                Creating meaningful experiences: an Introduction to User
                Experience design {'>'} {'\n\n'}owww.ly/p0fx50y5CoO {'\n\n'}#ux
                #uxdesign #uxresearch #userresearch #research #productdesing
                #webdesign #userexperience #startup #digital #design #diseno
                #psychology #servicedesign #conversion
                pic.twitter.com/wgpLcbkomN
              </Text>
            </View>
          </View>
        </View>
        {/* Third twitt */}
        <View style={{...styles.twittContainer, borderBottomWidth: 0}}>
          <View style={styles.header}>
            <View style={{flexDirection: 'row'}}>
              <PrupleStar />

              <View style={{marginLeft: 10}}>
                <AllNotificationAvatar3 />
              </View>
            </View>
            <View style={{marginRight: 10}}>
              <DownIcon />
            </View>
          </View>

          <View style={{paddingLeft: 10}}>
            <Text style={{...styles.text, marginBottom: 10}}>
              In case you missed{' '}
              <Text style={{fontWeight: 'bold', color: 'black'}}>
                {' '}
                Teador van schneider
              </Text>{' '}
              ’s Tweet{' '}
            </Text>

            <View>
              <Text style={{...styles.text}}>
                I’m always surprised how few designers are also serious gamers.
                Curious why that
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default All;
