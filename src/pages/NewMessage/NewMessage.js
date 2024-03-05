import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './NewMessage.style';
import SearchBar from '../../components/SearchBar/SearchBar';

import BackArrow from '../../assets/svgs/leftArrowIconBlack.svg';
import AzizAvatar from '../../assets/svgs/azizAvatar.svg';
import FigmaAvatar from '../../assets/svgs/figmaAvatar.svg';
import KeironAvatar from '../../assets/svgs/keironAvatar.svg';
import ZackAvatar from '../../assets/svgs/zackAvatar.svg';
import PixsellAvatar from '../../assets/svgs/user.svg';
import MaximilliamAvatar from '../../assets/svgs/maximillimAvatar.svg'
import TibithaAvatar from '../../assets/svgs/tabithaAvatar.svg';
import KarenneAvatar from '../../assets/svgs/kranneAvatar.svg';
import Tick from '../../assets/svgs/tickIcon.svg'


const NewMessage = ({navigation}) => {
  const goBack =()=>{
  navigation.goBack()
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={goBack}>

        <BackArrow />
        </TouchableOpacity>
        <Text style={styles.headerContainerText}>Messages</Text>
      </View>

      <View>
        <SearchBar
          inputContainer={{borderRadius: 0, marginHorizontal: 0, height: 40}}
          placeholder="Search for people and groups"
        />
      </View>

      {/* Aziz message */}
      <View style={styles.messageContainer}>
        <AzizAvatar width="40" height="40" />
        <View style={styles.messageTextContainer}>
          <Text style={styles.userName}>AzizDjan</Text>
          <Text style={styles.userTag}>@A_AzizDjan</Text>
        </View>
      </View>

         {/* Keiron message */}
         <View style={styles.messageContainer}>
        <KeironAvatar width="40" height="40" />
        <View style={styles.messageTextContainer}>
          <Text style={styles.userName}>Kieron Dotson</Text>
          <Text style={styles.userTag}>@kiero_d</Text>
        </View>
      </View>

         {/* Figma message */}
         <View style={styles.messageContainer}>
        <FigmaAvatar width="40" height="40" />
        <View style={styles.messageTextContainer}>
          <Text style={styles.userName}>Figma  <Tick/></Text>
         
          <Text style={styles.userTag}>@figmadesign</Text>
        </View>
      </View>

         {/* Zack message */}
         <View style={styles.messageContainer}>
        <ZackAvatar width="40" height="40" />
        <View style={styles.messageTextContainer}>
          <Text style={styles.userName}>Zack John</Text>
          <Text style={styles.userTag}>@zackjohn</Text>
        </View>
      </View>

         {/* Pixsells message */}
         <View style={styles.messageContainer}>
        <PixsellAvatar width="40" height="40" />
        <View style={styles.messageTextContainer}>
          <Text style={styles.userName}>Pixsellz</Text>
          <Text style={styles.userTag}>@pixsellz</Text>
        </View>
      </View>

         {/* Maximiiliam message */}
         <View style={styles.messageContainer}>
        <MaximilliamAvatar width="40" height="40" />
        <View style={styles.messageTextContainer}>
          <Text style={styles.userName}>Maximillian</Text>
          <Text style={styles.userTag}>@maxjacobson</Text>
        </View>
      </View>

         {/* Tibitha message */}
         <View style={styles.messageContainer}>
        <TibithaAvatar width="40" height="40" />
        <View style={styles.messageTextContainer}>
          <Text style={styles.userName}>Tibitha Potter  <Tick/></Text>
          <Text style={styles.userTag}>@mis_potter</Text>
        </View>
      </View>

         {/* Kerenne message */}
         <View style={styles.messageContainer}>
        <KarenneAvatar width="40" height="40" />
        <View style={styles.messageTextContainer}>
          <Text style={styles.userName}>karennne  <Tick/></Text>
          <Text style={styles.userTag}>@karennne</Text>
        </View>
      </View>


    </SafeAreaView>
  );
};

export default NewMessage;
