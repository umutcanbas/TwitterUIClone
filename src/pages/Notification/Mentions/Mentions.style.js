import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderBottomWidth: 0.2,
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 20,
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
  twitTextContainer: {
    marginLeft: 75,
    marginTop: -23,
  },
  twitContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  ımageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderRadius: 15,
    borderColor: 'grey',
    height: 240,
    width: 300,
    marginLeft: 70,
    overflow: 'hidden',
  },
  ımage: {
    justifyContent: 'center',
    width: 300,
    height: 167,
  },
  ımageTextContainer: {
    marginRight: 20,
    marginBottom: 10,
    marginTop: 10,
  },
});
