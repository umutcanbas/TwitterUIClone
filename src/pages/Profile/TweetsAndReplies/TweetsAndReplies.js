import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';

import styles from './TweetsAndReplies.style';

import ActionButtons from '../../../assets/svgs/repliceActionButtons.svg';
import Image1 from '../../../assets/svgs/ımageProfile2.svg';
import Image1png from '../../../assets/svgs/ımageProfile2png.png';
import Image2 from '../../../assets/svgs/ımageProfile3.svg';
import User from '../../../assets/svgs/user.svg';
import DownIcon from '../../../assets/svgs/downIcon.svg';
import KomolAvatar from '../../../assets/svgs/komolAvatar.svg';
import Polygon from '../../../assets/svgs/polygonImage.svg';

const TweetsAndReplies = () => {
  return (
    <ScrollView style={styles.container}>
      {/* pixels tweet */}
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
                · 2/14/20
              </Text>
              <DownIcon />
            </View>

            <View style={styles.twittTextContainer}>
              <Text style={styles.twittText}>Must have icon collections</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  ...styles.imageBorderContainer,
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                }}>
                {/* <Image1 width="80" height="80" resizeMode="contain" /> */}
                <Image
                  source={require('../../../assets/svgs/ımageProfile2png.png')}
                  resizeMode="contain"
                  style={{width:80, height:80}}
                />
              </View>
              <View
                style={{
                  ...styles.imageBorderContainer,
                  width: 200,
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                }}>
                <Text style={{marginHorizontal: 5}}>
                  The Best Free Icon Packs Everyone Must Download i...{'\n\n'}
                  <Text style={styles.twittText}>graphicmama.com</Text>
                </Text>
              </View>
            </View>

            <ActionButtons />
          </View>
        </View>
      </View>

      {/* komol tweet */}

      <View style={styles.twittContainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.twittIcon}>
            <KomolAvatar width="50" height="50" />
          </View>
          <View style={{margin: 5}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.userName}>Komol Kuchkarov</Text>
              <Text style={styles.userTag}>@kkuchka... </Text>
              <Text
                style={{
                  ...styles.userTag,
                  marginRight: 5,
                }}>
                ·2/13/20
              </Text>
              <DownIcon />
            </View>

            <View style={styles.twittTextContainer}>
              <Text style={styles.twittText}>
                Quickly create a low-fi wireframe version of your web projects
                with ready-to-use layouts of Scheme Constructor.{'\n\n'}Get it
                now on 👉{' '}
                <Text style={{color: 'rgb(97, 156, 229)', marginBottom: 10}}>
                  constructor.pixsellz.io
                </Text>
              </Text>
            </View>

            <View style={styles.imageContainer}>
              <Image2 width="300" height="100" />
              <View style={styles.polygon}>
                <View style={styles.polygonContainer}>
                  <Polygon width="17" height="17" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default TweetsAndReplies;
