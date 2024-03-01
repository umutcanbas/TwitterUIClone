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
  },
  headerContainerText: {
    fontSize: 20,
    fontWeight: 'bold',
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
    marginBottom: 20,
  },
  userName: {
    marginBottom: 1,
  },
  userTag: {
    color: 'grey',
  },
  messageDate: {
    marginBottom: 40,
    marginLeft: 20,
    color: 'grey',
  },
  messageText: {
    width: 230,
    color: 'grey',
  },
});
