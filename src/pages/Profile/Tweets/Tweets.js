import {View, Text, ScrollView} from 'react-native';
import React from 'react';

import styles from './Tweets.styles';

import Pin from '../../../assets/svgs/pinIcon.svg';
import ActionButtons from '../../../assets/svgs/profileActionButtons.svg';
import Image from '../../../assets/svgs/ımageProfile.svg';
import Polygon from '../../../assets/svgs/polygonImage.svg';
import User from '../../../assets/svgs/user.svg';
import DownIcon from '../../../assets/svgs/downIcon.svg';

const Tweets = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.twittContainer}>
        <View style={styles.likeContainer}>
          <Pin />
          <Text style={styles.likeText}>Pinned Tweet</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.twittIcon}>
            <User width="50" height="50" />
          </View>
          <View style={{margin: 5}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.userName}>Pixsellz</Text>
              <Text style={styles.userTag}>@pixsellz</Text>
              <Text
                style={{
                  ...styles.userTag,
                  marginRight: 80,
                }}>
                · 7/31/19
              </Text>
              <DownIcon />
            </View>

            <View style={styles.twittTextContainer}>
              <Text style={styles.twittText}>
                Scheme Constructor - your ultimate prototyping kit for all UX
                web and mobileepp design!{'\n'}
                <Text style={{color: 'rgb(97, 156, 229)', marginBottom: 10}}>
                  constructor.pixsellz.io{'\n\n'}#prototyping #wireframe #uiux
                  #ux
                </Text>
              </Text>
            </View>

            <View style={styles.imageContainer}>
              <Image width="310" height="200" />
              <View style={styles.polygon}>
                <View style={styles.polygonContainer}>
                  <Polygon width="17" height="17" />
                </View>
              </View>
            </View>

            <Text style={styles.imageText}>109 views</Text>
            <ActionButtons />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Tweets;
