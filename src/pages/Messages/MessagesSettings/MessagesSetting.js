import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

import styles from './MessagesSettings.style';

const MessagesSetting = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerContainerText}>Notifications</Text>
      </View>
    </SafeAreaView>
  );
};

export default MessagesSetting;
