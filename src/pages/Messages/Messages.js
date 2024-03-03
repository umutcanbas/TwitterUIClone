import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './Messages.style';

import User from '../../assets/svgs/user.svg';
import Settings from '../../assets/svgs/settingsIcon.svg';
import SearchBar from '../../components/SearchBar/SearchBar';

import AzizAvatar from '../../assets/svgs/azizAvatar.svg';
import MartinAvatar from '../../assets/svgs/martinAvatar.svg';
import AndrewAvatar from '../../assets/svgs/andrewAvatar.svg';
import KomolAvatar from '../../assets/svgs/komolAvatar.svg';
import KarenneAvatar from '../../assets/svgs/kranneAvatar.svg';
import MaximiliamAvatar from '../../assets/svgs/maximillimAvatar.svg';
import MartaAvatar from '../../assets/svgs/martaAvatar.svg';
import KeironAvatar from '../../assets/svgs/keironAvatar.svg';
import ZackAvatar from '../../assets/svgs/zackAvatar.svg';

const Messages = (props) => {
  const handlePage = () => {
    props.navigation.navigate('MessagesSettingPage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <User />
          <Text style={styles.headerContainerText}>Notifications</Text>
          <TouchableOpacity onPress={() => handlePage()}>
            <Settings />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomWidth: 0.2,
            borderColor: 'grey',
            paddingBottom: 10,
          }}>
          <SearchBar placeholder="Search for people and groups" />
        </View>
        {/* Aziz message */}
        <View style={styles.messageContainer}>
          <AzizAvatar />
          <View style={styles.messageTextContainer}>
            <Text style={styles.userName}>
              AzizDjan <Text style={styles.userTag}>@A_AzizDjan</Text>
            </Text>
            <Text style={styles.messageText}>
              You: You’re very welcome AzizDjan!
            </Text>
          </View>
          <Text style={styles.messageDate}>12/2/19</Text>
        </View>
        {/* Andrew message */}
        <View style={styles.messageContainer}>
          <AndrewAvatar />
          <View style={styles.messageTextContainer}>
            <Text style={styles.userName}>
              Andrew Parker <Text style={styles.userTag}>@andrewww_</Text>
            </Text>

            <Text style={styles.messageText}>
              You: You’re very welcome AzizDjan!
            </Text>
          </View>
          <Text style={styles.messageDate}>12/2/19</Text>
        </View>
        {/* Komol message */}
        <View
          style={{
            ...styles.messageContainer,
            backgroundColor: 'rgb(244 , 249 , 254)',
          }}>
          <KomolAvatar />
          <View style={styles.messageTextContainer}>
            <Text style={styles.userName}>
              Komol Kuchkarov <Text style={styles.userTag}>@kkuchkarov</Text>
            </Text>

            <Text style={styles.messageText}>You accepted the request</Text>
          </View>
          <Text style={styles.messageDate}>12/2/19</Text>
        </View>
        {/* Karenne message */}
        <View style={styles.messageContainer}>
          <KarenneAvatar />
          <View style={styles.messageTextContainer}>
            <Text style={styles.userName}>
              karennne <Text style={styles.userTag}>@karennne</Text>
            </Text>
            <Text style={styles.messageText}>
              You: I would greatly appreciate if you could retweet this if you
              think its worthy :{')'}
            </Text>
          </View>
          <Text style={styles.messageDate}>12/2/19</Text>
        </View>
        {/* Maximiliam message */}
        <View style={styles.messageContainer}>
          <MaximiliamAvatar />
          <View style={styles.messageTextContainer}>
            <Text style={styles.userName}>
              Maximillian <Text style={styles.userTag}>@maxjacobson</Text>
            </Text>
            <Text style={styles.messageText}>
              sent you a link: Hello Pixsellz,
            </Text>
          </View>
          <Text style={styles.messageDate}>5/22/19</Text>
        </View>
        {/* Marta message */}
        <View style={styles.messageContainer}>
          <MartaAvatar />
          <View style={styles.messageTextContainer}>
            <Text style={styles.userName}>
              Martha Craig <Text style={styles.userTag}>@craig_love</Text>
            </Text>
            <Text style={styles.messageText}>
              You: Just started 5 months ago
            </Text>
          </View>
          <Text style={styles.messageDate}>12/2/19</Text>
        </View>
        {/* Martin message */}
        <View style={styles.messageContainer}>
          <MartinAvatar />
          <View style={styles.messageTextContainer}>
            <Text style={styles.userName}>
              Martin Randolph <Text style={styles.userTag}>@martini_rond</Text>
            </Text>
            <Text style={styles.messageText}>You accepted the request</Text>
          </View>
          <Text style={styles.messageDate}>3/7/19</Text>
        </View>
        {/* Keiron message */}
        <View style={styles.messageContainer}>
          <KeironAvatar />
          <View style={styles.messageTextContainer}>
            <Text style={styles.userName}>
              Kieron Dotson <Text style={styles.userTag}>@kiero_d</Text>
            </Text>
            <Text style={styles.messageText}>
              You: Hi Kiero, let me see what I can do gfor you. I will get back
              to you soon. Our
            </Text>
          </View>
          <Text style={styles.messageDate}>12/2/19</Text>
        </View>
        {/* Zack message */}
        <View style={styles.messageContainer}>
          <ZackAvatar />
          <View style={styles.messageTextContainer}>
            <Text style={styles.userName}>
              Zack John
              <Text style={styles.userTag}>@zackjohn</Text>
            </Text>
            <Text style={styles.messageText}>You accepted the request</Text>
          </View>
          <Text style={styles.messageDate}>11/10/18</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Messages;
