import {View, Text, SafeAreaView, TouchableOpacity, Switch} from 'react-native';
import React, {useState} from 'react';

import styles from './SettingsAndPrivacy.style';

import FrontIcon from '../../assets/svgs/rightArrowIcon.svg';

const MessagesSetting = (props, {navigation}) => {
  const [receiveMessagesFromAnyone, setReceiveMessagesFromAnyone] =
    useState(false);
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
        <TouchableOpacity onPress={goBack}></TouchableOpacity>
        <Text style={styles.headerContainerText}>Settings and privacy</Text>
        <TouchableOpacity onPress={goBack}>
          <Text style={{color: '#4C9EEB', fontWeight: 'bold'}}>Done</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.titleText}>@pixsellz</Text>
        </View>
      </View>
      {/* first setting */}
      <View style={styles.settingContainer}>
        <View style={styles.settingInnerContainer}>
          <Text style={styles.settingHeaderText}>Account</Text>
          <FrontIcon />
        </View>
      </View>

      {/* second setting */}
      <View style={styles.settingContainer}>
        <View style={styles.settingInnerContainer}>
          <Text style={styles.settingHeaderText}>Privacy and safety</Text>
          <FrontIcon />
        </View>
      </View>

      {/* third setting */}
      <View style={styles.settingContainer}>
        <View style={styles.settingInnerContainer}>
          <Text style={styles.settingHeaderText}>Notifications</Text>
          <FrontIcon />
        </View>
      </View>

      {/* fourth setting */}
      <View style={styles.settingContainer}>
        <View style={styles.settingInnerContainer}>
          <Text style={styles.settingHeaderText}>Content preferences</Text>
          <FrontIcon />
        </View>
      </View>

      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.titleText}>General</Text>
        </View>
      </View>
      {/* fifth setting */}
      <View style={styles.settingContainer}>
        <View style={styles.settingInnerContainer}>
          <Text style={styles.settingHeaderText}>Display and sound</Text>
          <FrontIcon />
        </View>
      </View>

      {/* sixth setting */}
      <View style={styles.settingContainer}>
        <View style={styles.settingInnerContainer}>
          <Text style={styles.settingHeaderText}>Data usage</Text>
          <FrontIcon />
        </View>
      </View>

      {/* seventh setting */}
      <View style={styles.settingContainer}>
        <View style={styles.settingInnerContainer}>
          <Text style={styles.settingHeaderText}>Accessibility</Text>
          <FrontIcon />
        </View>
      </View>

      {/* eighth setting */}
      <View style={styles.settingContainer}>
        <View style={styles.settingInnerContainer}>
          <Text style={styles.settingHeaderText}>About Twitter</Text>
          <FrontIcon />
        </View>
      </View>

      {/* fourth setting */}
      <View style={styles.settingContainer}>
        <View style={styles.settingInnerContainer}>
          <Text style={styles.settingText}>
            General settings affect all of your Twitter accounts on this device.
          </Text>
        </View>
      </View>

      <View style={{backgroundColor: 'rgb(232, 236, 240)', flex: 1}}></View>
    </SafeAreaView>
  );
};

export default MessagesSetting;
  