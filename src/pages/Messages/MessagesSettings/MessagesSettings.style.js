import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(232, 236, 240)',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 0.2,
    borderColor: 'grey',
    backgroundColor: 'white',
  },
  headerContainerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleContainer: {
    backgroundColor: 'rgb(232, 236, 240)',
  },
  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'grey',
    margin: 16,
  },
  settingContainer: {
    backgroundColor: 'white',

    paddingHorizontal: 17,
    paddingVertical: 5,
    borderBottomWidth: 0.2,
    borderColor: 'grey',
  },
  settingInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settingHeaderText: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 17,
  },
  settingText: {
    color: 'grey',
  },
});
