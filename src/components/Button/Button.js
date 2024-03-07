import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import styles from './Button.style';

import TwettIcon from '../../assets/svgs/createTwettIcon.svg';
import AddMemberIcon from '../../assets/svgs/addMemberIcon.svg';
import MessageIcon from '../../assets/svgs/createMessageIcon.svg';

const Button = ({ onPress, title }) => {
  // Conditional rendering of icons based on title
  const icon = title === 'Tweet' ? (
    <TwettIcon />
  ) : title === 'Messages' ? (
    <MessageIcon />
  ) : title === 'List' ? (
    <AddMemberIcon />
  ) : null; // Add a default value of null for other titles

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};

export default Button;
