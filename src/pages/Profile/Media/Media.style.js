import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    imageContainer: {
        position: 'relative',
        marginBottom: 30,
      },
      twittTextContainer: {
        flexDirection: 'row',
        marginTop: 5,
        width: 300,
        marginBottom: 5,
      },
      twittText: {
        marginRight: 10,
        marginLeft: 5,
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
      twittIcon: {
        alignItems: 'center',
        marginLeft: 8,
      },
      twittContainer: {
        marginTop: 10,
        marginBottom: 3,
        paddingRight: 5,
        paddingLeft: 8,
      },
})