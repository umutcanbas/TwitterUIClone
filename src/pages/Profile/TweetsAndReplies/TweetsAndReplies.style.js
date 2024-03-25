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
  },
  twittContainer: {
    marginTop: 10,
    marginBottom: 3,
    paddingRight: 5,
    paddingLeft: 8,
    borderBottomWidth: 0.2,
    borderColor: 'grey',
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
    fontSize: 15,
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
  imageBorderContainer: {
    marginBottom: 10,
    borderWidth: 0.2,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },

  polygon: {
    marginTop: -30,
    marginHorizontal: 120,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 30,
  },
});
