import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  headerContainerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 120,
  },
  messageContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 0.2,
    borderColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    width: '%100',
  },
  messageTextContainer: {
    marginLeft: 10,
    marginBottom: 8,
  },
  userName: {
    marginBottom: 1,
    fontSize: 16,
    fontWeight:'bold'
  },
  userTag: {
    color: 'grey',
    fontSize: 16,
  },
});
