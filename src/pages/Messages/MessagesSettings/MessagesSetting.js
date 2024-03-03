import {View, Text, SafeAreaView, TouchableOpacity, Switch} from 'react-native';
import React , {useState} from 'react';

import styles from './MessagesSettings.style';

import BackIcon from '../../../assets/svgs/leftArrowIcon.svg';

const MessagesSetting = (props, {navigation}) => {
  const [receiveMessagesFromAnyone, setReceiveMessagesFromAnyone] = useState(false);
  const [qualityFilter, setQualityFilter] = useState(false);
  const [showReadReceipts, setShowReadReceipts] = useState(false);

  const handleReceiveMessagesSwitch = () => {
    setReceiveMessagesFromAnyone(!receiveMessagesFromAnyone);
  };

  const handleQualityFilterSwitch = () => {
    setQualityFilter(!qualityFilter);
  };

  const handleShowReadReceiptsSwitch = () => {
    setShowReadReceipts(!showReadReceipts);
  };

  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={goBack}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.headerContainerText}>Messages settings</Text>
        <TouchableOpacity onPress={goBack}>
          <Text style={{color: '#4C9EEB', fontWeight: 'bold'}}>Done</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.titleText}>Privacy</Text>
        </View>
      </View>
      {/* first setting */}
      <View style={styles.settingContainer}>
        <View style={styles.settingInnerContainer}>
          <Text style={styles.settingHeaderText}>
            Receive messages from anyone
          </Text>
          <Switch
            trackColor={{false: '#E9E9EA', true: '#59BC6C'}}
            thumbColor="{isEnabled ? '#FFFFFF' : '#FFFFFF'}"
            onValueChange={handleReceiveMessagesSwitch}
            value={receiveMessagesFromAnyone}
          />
        </View>
        <Text style={styles.settingText}>
          You will be able to receive Direct Message requests from anyone on
          Twitter, even if you don’t follow them.{'\n'}
          <Text style={{color: '#4C9EEB'}}>Learn more</Text>
        </Text>
      </View>
      {/* second setting */}
      <View style={styles.settingContainer}>
        <View style={styles.settingInnerContainer}>
          <Text style={styles.settingHeaderText}>Quality filter</Text>
          <Switch
            trackColor={{false: '#E9E9EA', true: '#59BC6C'}}
            thumbColor="{isEnabled ? '#FFFFFF' : '#FFFFFF'}"
            onValueChange={handleQualityFilterSwitch}
            value={qualityFilter}
          />
        </View>
        <Text style={styles.settingText}>
          Filters lower-quality messages from your Direct Message requests.
          {'\n'}
          <Text style={{color: '#4C9EEB'}}>Learn more</Text>
        </Text>
      </View>
      {/* third setting */}
      <View style={styles.settingContainer}>
        <View style={styles.settingInnerContainer}>
          <Text style={styles.settingHeaderText}>Show read receipts</Text>
          <Switch
            trackColor={{false: '#E9E9EA', true: '#59BC6C'}}
            thumbColor="{isEnabled ? '#FFFFFF' : '#FFFFFF'}"
            onValueChange={handleShowReadReceiptsSwitch}
            value={showReadReceipts}
          />
        </View>
        <Text style={styles.settingText}>
          When someone sends you a message, peopla in the conversation will know
          when you’ve seen it. If you turn off this setting, you won’t be able
          to see read receipts from others. 
          <Text style={{color: '#4C9EEB'}}> Learn more</Text>
        </Text>
      </View>
      <View style={{backgroundColor: 'rgb(232, 236, 240)', flex:1}} ></View>
    </SafeAreaView>
  );
};

export default MessagesSetting;
