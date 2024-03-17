import {View, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './Footernavigator.style';

import Home from '../../assets/svgs/homePageIconActive.svg';
import Search from '../../assets/svgs/searchPageIcon.svg';
import Notification from '../../assets/svgs/notificationPageIcon.svg';
import Message from '../../assets/svgs/messagePageIcon.svg';

const Footernavigator = props => {
  return (
    <View style={{ borderTopWidth:0.2,
      borderColor:'grey'}}>

    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={props.onPressHome}>
          <Home />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={props.onPressSearch}>
        <Search />
      </TouchableOpacity>

      <TouchableOpacity onPress={props.onPressNotification}>
        <Notification />
      </TouchableOpacity>

      <TouchableOpacity onPress={props.onPressMessage}>
        <Message />
      </TouchableOpacity>
    </View>
    </View>

  );
};

export default Footernavigator;
