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
    marginLeft: 150,
  },
  twittContainer: {
    marginTop: 10,
    marginBottom: 3,
    paddingRight: 8,
    paddingLeft: 8,
  },

  twittIcon: {
    alignItems: 'center',
    marginLeft: 8,
  },
  userName: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 4,
    color: 'black',
  },
  userTag: {
    fontSize: 17,
    marginLeft: 5,
    color: 'grey',
  },
  twittTextContainer: {
    flexDirection: 'row',
    marginTop: 15,
    width: 300,
    marginBottom: 15,
    marginLeft: 10,
  },
  twittText: {
    color: 'grey',
    marginRight: 10,
    marginLeft: 5,
    fontSize: 20,
  },
  link: {
    color: 'rgb(97, 156, 229)',
    marginBottom: 10,
  },

  ımageBorderContainer: {
    marginBottom: 10,
    borderWidth: 0.2,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  component: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderBottomWidth: 0.2,
    borderColor: 'grey',
    height: 30,
    width: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButtons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 40,
    height: 20,
    marginBottom: 10,
  },
  footer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    margin: 10,
    width: '%100',
    height: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    height: 50,
  },
  searchBar: {
    backgroundColor: 'rgb(232, 236, 240)',
    borderRadius: 15,
    width: 310,
    height: 30,
    marginLeft: 10,
    fontSize: 17,
    padding: 5,
  },
  ımageContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 10,
  },
});
