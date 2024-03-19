import {View, Text, ScrollView} from 'react-native';
import React from 'react';

import styles from './Likes.style';

import KomolAvatar from '../../../assets/svgs/komolAvatar.svg';
import ActionButton from '../../../assets/svgs/likesActionButtons.svg';
import Image from '../../../assets/svgs/likesImage.svg';
import DownIcon from '../../../assets/svgs/downIcon.svg';

const Media = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.twittContainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.twittIcon}>
            <KomolAvatar width="50" height="50" />
          </View>
          <View style={{margin: 5}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.userName}>Komol Kuchkarov</Text>
              <Text style={styles.userTag}>@kkuchkarov</Text>
              <Text
                style={{
                  ...styles.userTag,
                  marginRight: 20,
                }}>
                · 6d
              </Text>
              <DownIcon />
            </View>

            <View style={styles.twittTextContainer}>
              <Text style={styles.twittText}>
                When we first launched Vector Mockups, I had wrote that in 2018
                our free product downloads was 28K+ and we had set a goal to
                double this figure by the end of 2019. Today our team and I are
                glad to announce tgat we aave easily hit our goals with 47k+
                downloads in 2019.
               
              </Text>
            </View>

            <View style={styles.imageContainer}>
              <Image width="310" height="200" />
              <ActionButton />
            </View>
            <Text style={{color: 'rgb(97, 156, 229)', marginBottom: 10}}>
                Show this thread
                </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Media;
