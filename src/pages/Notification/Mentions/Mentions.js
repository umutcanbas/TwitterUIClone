import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';

import styles from './Mentions.style';

import MentionsAvatar1 from '../../../assets/svgs/mentonAvatar1.svg';
import MentionsAvatar2 from '../../../assets/svgs/mentonAvatar2.svg';
import MentionImage2 from '../../../assets/svgs/mentonImage1.svg';
import MentionImage1 from '../../../assets/svgs/mentonImage2.svg';
import MentionActionButton from '../../../assets/svgs/mentionActionButtons.svg';
import DownIcon from '../../../assets/svgs/downIcon.svg';

const Mentions = () => {
  return (
    <View style={styles.container}>
      {/* Marine mention */}
      <ScrollView>
        <View style={styles.userContainer}>
          <MentionsAvatar1 height={50} width={50} />
          <View style={styles.twitContainer}>
            <Text style={styles.userName}>Mariane</Text>
            <Text style={styles.userTag}>@marianeee</Text>
            <Text style={{...styles.userTag, marginRight: 60}}>·1/21/20</Text>
            <DownIcon height={12} width={12} />
          </View>
        </View>

        <View style={styles.twitTextContainer}>
          <Text style={{fontSize: 17}}>
            Hey {'\n'}
            <Text style={{color: 'rgb(97,156,229)'}}>
              @theflaticon @iconmonstr @pixsellz @dan ielbruce_ @romanshamin
              @_vect_ @glyphish
            </Text>{' '}
            ! {'\n'} Check our our new article “Top Icons Packs and Resources
            for Web”. You are in! 😎{'\n'} 👉{' '}
            <Text style={{color: 'rgb(97,156,229)'}}>
              {' '}
              marianeee.com/blog/top-icons...
            </Text>
          </Text>
        </View>

        <View style={styles.ımageContainer}>
          <View style={styles.ımage}>
            <Image
              source={require('../../../assets/svgs/mentionImage1png.png')}
              resizeMode="contain"
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={styles.ımageTextContainer}>
            <Text style={{fontSize: 17}}>
              Top Icons Packs and Resources for Web {'\n'}
              <Text style={{color: 'grey'}}>flatlogic.com</Text>{' '}
            </Text>
          </View>
        </View>

        {/* Crown mention */}

        <View style={styles.userContainer}>
          <MentionsAvatar2 height={50} width={50} />
          <View style={styles.twitContainer}>
            <Text style={styles.userName}>Mariane</Text>
            <Text style={styles.userTag}>@marianeee</Text>
            <Text style={{...styles.userTag, marginRight: 60}}>·1/21/20</Text>
            <DownIcon height={12} width={12} />
          </View>
        </View>

        <View style={styles.twitTextContainer}>
          <Text style={{fontSize: 17}}>
            Fragments Android Wireframe Kit UX Wire was jusr featured in today’s
            <Text style={{color: 'rgb(97,156,229)'}}>
              {/*  */} crownlistllc.com
            </Text>{' '}
            newsletter via
            <Text style={{color: 'rgb(97,156,229)'}}> @pixsellz</Text>
          </Text>
        </View>

        <View style={{...styles.ımageContainer, borderBottomWidth: 0}}>
          <View style={{...styles.ımage, width: 400, height: 250}}>
            <Image
              source={require('../../../assets/svgs/mentionImagePNG2.png')}
              resizeMode="contain"
              style={{width: '100%', height: '100%'}}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Mentions;
