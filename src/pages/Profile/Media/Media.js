import {View, Text, ScrollView} from 'react-native';
import React from 'react';

import styles from './Media.style';

import User from '../../../assets/svgs/user.svg';
import Image from '../../../assets/svgs/mediaImage.svg';
import DownIcon from '../../../assets/svgs/downIcon.svg';

const Media = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.twittContainer}>
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
                · 12/23/19
              </Text>
              <DownIcon />
            </View>

            <View style={styles.twittTextContainer}>
              <Text style={styles.twittText}>
                Freebie Alert! ⚠ Mobile Apps Library consists of 120+
                reconstructed screens of four popular mobile apps. {'\n\n'}
               <Text style={{color:'grey'}} >Download: </Text>  
                <Text style={{color: 'rgb(97, 156, 229)', marginBottom: 10}}>
                  apps.pixsellz.io {'\n\n'}#freebie #uidesign #whatsapp
                  #messenger #instagram #sketchapp #figma
                </Text>
              </Text>
            </View>

            <View style={styles.imageContainer}>
              <Image width="310" height="200" />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Media;
