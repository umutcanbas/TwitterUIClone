import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 0.2,
    borderColor: 'grey',
    paddingHorizontal: 20,
  },
  textContainer: {
    margin: 3,
  },
  name: {
    fontWeight: '500',
    margin: 3,
  },
  teamName: {
    fontSize: 18,
    margin: 3,
  },
  members: {
    color: 'grey',
    margin: 3,
  },
});
