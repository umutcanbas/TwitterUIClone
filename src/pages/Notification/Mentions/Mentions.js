import {View, Text} from 'react-native';
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
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          paddingTop: 20,
        }}>
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
          ! {'\n'} Check our our new article “Top Icons Packs and Resources for
          Web”. You are in! 😎{'\n'} 👉{' '}
          <Text style={{color: 'rgb(97,156,229)'}}>
            {' '}
            marianeee.com/blog/top-icons...
          </Text>
        </Text>
      </View>

      <View style={{borderWidth:0.2, borderRadius:15 , borderColor:'grey'}} >
        <View style={{borderTopLeftRadius:15, borderTopRightRadius:15}}>
          <MentionImage1 /* height={'%100'} width={'%100'} */  />
        </View>
        <View>
          <Text>Top Icons Packs and Resources for Web {'\n'}flatlogic.com</Text>
        </View>
      </View>
    </View>
  );
};

export default Mentions;
