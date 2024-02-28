import {View, Text} from 'react-native';
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
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <PrupleStar />

          <View style={{marginLeft: 10}}>
            <AllNotificationAvatar1 />
          </View>
        </View>
        <DownIcon />
      </View>
      <View>
        <Text>In case you missed Saad Drusteer’s Tweet </Text>
      </View>
      <View>
        <Text>
          🔥 Are you using WordPress and migrating to the JAMstack? I wrote up a
          case study about how Smashing Magazine moved to JAMstack and saw great
          performance improvements and better security.{'\n\n'}
          smashingdrusteer.com/2020/01/migrat...
        </Text>
      </View>
    </View>
  );
};

export default All;
