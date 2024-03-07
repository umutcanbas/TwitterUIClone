import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

import styles from './Member.style';
import Pixells from '../../../assets/svgs/user.svg';
import MemberAvatar1 from '../../../assets/svgs/memberAvatar1.svg';
import MemberAvatar2 from '../../../assets/svgs/memberAvatar2.svg';

const Member = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* team1 */}
      <View style={styles.teamContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Joshua Lawrence</Text>
          <Text style={styles.teamName}>D-teams</Text>
          <Text style={styles.members}>systems</Text>
          <Text style={styles.members}>277 members</Text>
        </View>
        <MemberAvatar1 width={50} height={50} />
      </View>

      {/* team2 */}
      <View style={styles.teamContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Pixsellz Team</Text>
          <Text style={styles.teamName}>start-up</Text>
          <Text style={styles.members}>77 members</Text>
        </View>
        <Pixells width={50} height={50} />
      </View>

      {/* team3 */}
      <View style={styles.teamContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Pixsellz Team</Text>
          <Text style={styles.teamName}>gadgets</Text>
          <Text style={styles.members}>88 members · 5 subscribers</Text>
        </View>
        <Pixells width={50} height={50} />
      </View>

      {/* team4 */}
      <View style={styles.teamContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Pixsellz Team</Text>
          <Text style={styles.teamName}>designer</Text>
          <Text style={styles.members}>68 members</Text>
        </View>
        <Pixells width={50} height={50} />
      </View>

      {/* team5 */}
      <View style={styles.teamContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Ustrations</Text>
          <Text style={styles.teamName}>Illustrators</Text>
          <Text style={styles.members}>3959 members · 11 subscribers</Text>
        </View>
        <MemberAvatar2 width={50} height={50} />
      </View>
    </SafeAreaView>
  );
};

export default Member;
