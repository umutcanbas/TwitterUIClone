import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'white',
  },
  headerTextContainer: {
    borderBottomWidth: 0.2,
    borderColor: 'grey',
    height: 40,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    padding: 10,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 15,
  },
  text: {
    color: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 15,
    backgroundColor: '#4C9EEB',
  },
  buttonText: {
    margin: 8,
    color: 'white',
    fontWeight: 'bold',
  },
});
