import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  
  twittContainer: {
    marginTop: 10,
    marginBottom: 3,
    paddingRight: 5,
    paddingLeft: 8,
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 47,
  },
  likeText: {
    marginLeft: 10,
    color: 'grey',
  },
  twittIcon: {
    alignItems: 'center',
    marginLeft: 8,
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
  twittTextContainer: {
    flexDirection: 'row',
    marginTop: 5,
    width: 300,
    marginBottom: 5,
  },
  twittText: {
    color: 'grey',
    marginRight: 10,
    marginLeft: 5,
  },
  thread: {
    color: 'rgb(97, 156, 229)',
    marginBottom: 10,
  },
  polygonContainer: {
    backgroundColor: '#4C9EEB',
    borderRadius: 50,
    width: 47,
    height: 47,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'white',
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 30,
  },
  imageText: {
    color: 'grey',
    marginVertical: 8,
    marginTop: 40,
    marginBottom: 8,
  },
  polygon: {
    marginTop: -120,
    marginHorizontal: 120,
  },
});
