import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  twittContainer: {
    marginTop: 10,
    marginBottom: 3,
    marginRight: 5,
    marginLeft: 8,
    borderBottomWidth: 0.2,
    borderColor: 'grey',
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  likeText: {
    marginLeft: 10,
    color: 'grey',
    
  },
  martaTwittIcon:{
    justifyContent:'center',
    alignItems:'center'
  },
  userName:{
    fontSize:17,
    fontWeight:'bold',
    marginLeft:10
  },
  userTag:{
    fontSize:17,
    marginLeft:10
  },
  twitTime:{
    fontSize:17,
    marginLeft:10
  }
});
