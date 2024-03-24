import {Dimensions, StyleSheet} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    height: deviceSize.height / 4,
    width: 'auto',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    color: 'black',
    padding: 5,
    marginHorizontal: 10,
  },
button:{
  borderRadius:45,
  backgroundColor:'rgb(232, 236, 240)',
  width:'auto',
  height:50,
  margin:10,
  alignItems:'center',
  justifyContent:'center'

},
buttonText:{
  color:'black',
  fontSize:17
}
});
