import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    backgroundColor: 'rgb(31, 31, 31)',
    height: 100,
    width: '%100',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    marginHorizontal: 70,
  },
  userContainer: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  user: {
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'white',
    marginTop: -20,
  },
  userInnerContainer: {},
  userText: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  userTagText: {
    fontSize: 13,
    color: 'grey',
  },
  editButton: {
    borderWidth: 1,
    borderRadius: 40,
    borderColor: '#4C9EEB',
    width: 80,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  editButtonText: {
    color: '#4C9EEB',
    fontWeight: 'bold',
    fontSize: 12,
  },

  detailContainer: {
    margin: 10,
  },
  detailLinkContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },

  followerText: {
    color: 'grey',
  },
  followerNumber: {
    fontWeight: 'bold',
    color: 'black',
  },
});
