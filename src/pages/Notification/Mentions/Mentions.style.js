import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  userName: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 4,
    
  },
  userTag: {
    fontSize: 17,
    marginLeft: 5,
    color: 'grey',
  },
  twitTextContainer:{
    marginLeft:75,
    marginTop:-23
  },
  twitContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  }
});
