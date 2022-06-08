import { StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import normalize from '../../config/helpers/normalize'


export const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: normalize(10),
    borderWidth: normalize(1),
    height: normalize(50),
    justifyContent: 'center',
    marginHorizontal:normalize(20),
    backgroundColor:Colors.white,
    marginBottom:normalize(10)

  },
  textInput:{
    fontSize:normalize(15),
    marginLeft:normalize(10),
  }
})
