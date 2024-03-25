import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -60,
    marginHorizontal: 16,
  },

  users: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userNameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  userTagText: {
    fontSize: 17,
    color: 'grey',
  },
  followerContainer: {
    marginRight: 70,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  followerNumberText: {
    fontWeight: 'bold',
  },
  followerText: {
    color: 'grey',
  },
  buttonContainer: {
    borderBottomWidth: 0.2,
    borderColor: 'grey',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    marginLeft: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 20,
  },
  appInfoContainer: {
    marginTop: 20,
  },
  appInfoText: {
    marginLeft: 15,
    marginTop: 15,
    color: 'black',
    fontSize: 18,
  },
  footer: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
