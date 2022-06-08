import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CustomInput from '../../Components/CustomInput';
import {styles} from './style';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Hideo} from 'react-native-textinput-effects';
import {DATA} from './constants';

export default function SignInScreen({navigation}) {
  return (
    <View style={styles.parent}>
      <View style={styles.inputsContainer}>
        <Text style={styles.title}>Connexion</Text>
        {DATA.map(item => {
          return <CustomInput placeholder={item.placeholder}></CustomInput>;
        })}
      </View>
      <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.signUpBtnStyle} onPress={()=>navigation.navigate('SignUp')}>
        <Text style={styles.signUpBtnText}>
          S'inscrire
        </Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.btnStyle}onPress={()=>navigation.goBack()} >
        <Text style={styles.btnText}>
          Se connecter
        </Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}
