import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  headerComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  button: {
    backgroundColor: 'white',
  },
  buttonText: {
    color: '#4C9EEB',
    fontSize: 17,
  },
  tweetButton: {
    backgroundColor: 'rgb(192,219,245)',
    borderRadius: 50,
    width: 60,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tweetButtonText: {
    color: 'white',
  },
  tweetContainer: {
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    marginBottom:200
    
  },
  tweetContainerText:{
    marginHorizontal:10,
    color:'grey',
    fontSize:17
  },
  twettImageContainer:{
    flexDirection:'row',
    margin:10,
    
  },
  tweetImage:{
    marginHorizontal:5,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:0.1,

   
  }
});
