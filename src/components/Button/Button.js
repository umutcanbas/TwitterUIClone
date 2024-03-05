import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './Button.style';

import TwettIcon from '../../assets/svgs/createTwettIcon.svg';
import MessageIcon from '../../assets/svgs/createMessageIcon.svg';

const Button = ({onPress, title}) => {
  // Conditional rendering of icons based on title
  const icon = title === 'Tweet' ? <TwettIcon /> : <MessageIcon />;

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};

export default Button;
