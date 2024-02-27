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
    paddingRight: 5,
    paddingLeft: 8,
    borderBottomWidth: 0.2,
    borderColor: 'grey',
    
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 60,
  },
  likeText: {
    marginLeft: 10,
    color: 'grey',
  },
  twittIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  userTag: {
    fontSize: 17,
    marginLeft: 10,
    color: 'grey',
  },
  twittTextContainer:{
    flexDirection: 'row', marginTop: 5, width: 300
  },
  twittText:{
    fontWeight: '500', marginRight: 10, marginLeft: 5
  },
  thread:{
    color: 'rgb(97, 156, 229)' , marginBottom:10
  }

});
