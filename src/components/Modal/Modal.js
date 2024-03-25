import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

import Retweet from '../../assets/svgs/retweetStrokeIcon.svg';
import Pen from '../../assets/svgs/penStrokeIcon.svg';

import styles from './Modal.style';
function ModalTester({visible, onClose}) {
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Retweet width="25" height="25" />
          <Text style={styles.text}>Retweet!</Text>
        </View>
        <View style={styles.innerContainer}>
          <Pen width="25" height="25" />
          <Text style={styles.text}>Retweet with comment</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default ModalTester;
