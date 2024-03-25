import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'white',
  },
  titleComponent: {
    backgroundColor: 'rgb(232, 236, 240)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    width: '%100',
    paddingHorizontal: 20,
  },
  closeButton: {
    backgroundColor: 'grey',
    borderRadius: 50,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#61677A',
  },
  userContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
    borderColor: 'grey',
  },
  user: {
    marginHorizontal:5,
    justifyContent:'center',
    alignItems:'center'
  },
  userName: {
    color:'black'
  },
  userTag: {
    color:'grey'
  },
  footerContainer: {
    borderWidth: 0.2,
    borderColor:'grey',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:40,
    paddingHorizontal:10

  },
  footerText: {},
});
