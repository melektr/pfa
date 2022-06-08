import {StyleSheet} from 'react-native';
import normalize from '../../config/helpers/normalize';
import {Colors} from '../../config/theme';
export const styles = StyleSheet.create({
  parent: {
    backgroundColor: Colors.primary,
    flex: 1,
    justifyContent: 'center',
    // alignItems:'center'
  },
  contentContainerStyle: {
    paddingTop: normalize(35),
  },
  inputsContainer: {},
  title: {
    fontSize: normalize(15),
    color: Colors.white,
    marginLeft: normalize(20),
  },

  separatorStyle: {
    height: normalize(10),
  },

  btnContainer:{
    position:'absolute',
    bottom:normalize(40),
    // justifyContent:'center',
    alignSelf:'center',
    // marginHorizontal:normalize(20),
    width:'80%',
  },
  signUpBtnStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    marginBottom:normalize(10)
  },
  signUpBtnText:{
    fontSize:normalize(15),
    color:Colors.white
  },
  btnStyle: {
    shadowColor: Colors.white,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,

    shadowRadius: 1,
    shadowOpacity: 1,
    shadowRadius: 3.84,
    borderRadius:normalize(10),
    elevation: 5,
  },
  btnText:{
    fontSize:normalize(18),
    color:Colors.white
  },
});
