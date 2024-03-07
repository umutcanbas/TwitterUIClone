import {View, Text, SafeAreaView, Button, ScrollView} from 'react-native';
import React from 'react';

import styles from './Search.style';

import SearchBar from '../../components/SearchBar/SearchBar';
import LeftUpArrow from '../../assets/svgs/leftUpArrow.svg';
import CloseButton from '../../assets/svgs/closeButton.svg';
import MartaAvatar from '../../assets/svgs/martaAvatar.svg';
import SabAvatar from '../../assets/svgs/sabAvatar.svg';
import TabithaAvatar from '../../assets/svgs/tabithaAvatar.svg';
import FigmaAvatar from '../../assets/svgs/figmaAvatar.svg';
import FigmaAvatar2 from '../../assets/svgs/figmaAvatar2.svg';
import Tick from '../../assets/svgs/tickIcon.svg';

const Search = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <SearchBar placeholder="Search Twitter" inputContainer={{width: 270}} />
        <Button onPress={goBack} title={'Cancel'} />
      </View>

      <View style={styles.titleComponent}>
        <Text style={styles.titleText}>Recent searches</Text>
        <View style={styles.closeButton}>
          <CloseButton width={10} height={10} />
        </View>
      </View>

      <View style={styles.userContainer}>
        <ScrollView horizontal={true}>
          <View style={styles.user}>
            <SabAvatar height={60} width={60} />
            <Text style={styles.userName}>Sab Khasa...</Text>
            <Text style={styles.userTag}>@s_khasan...</Text>
          </View>

          <View style={styles.user}>
            <MartaAvatar height={60} width={60} />
            <Text style={styles.userName}>Martha Cr...</Text>
            <Text style={styles.userTag}>@craig_love</Text>
          </View>

          <View style={styles.user}>
            <TabithaAvatar height={60} width={60} />
            <Text style={styles.userName}>
              Tibitha P...
              <Tick />
            </Text>
            <Text style={styles.userTag}>@mis_potter</Text>
          </View>

          <View style={styles.user}>
            <FigmaAvatar height={60} width={60} />
            <Text style={styles.userName}>
              Figma <Tick />
            </Text>
            <Text style={styles.userTag}>@figmadesi...</Text>
          </View>

          <View style={styles.user}>
            <FigmaAvatar2 height={60} width={60} />
            <Text style={styles.userName}>Figma Plugins</Text>
            <Text style={styles.userTag}>@FigmaPlugins</Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>skhasanov</Text>
        <LeftUpArrow />
      </View>

      <View style={{backgroundColor: 'rgb(232, 236, 240)', flex: 1}}></View>
    </SafeAreaView>
  );
};

export default Search;
