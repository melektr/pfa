import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CustomInput from '../../Components/CustomInput';
import {styles} from './style';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Hideo} from 'react-native-textinput-effects';
import {DATA} from './constants';

export default function SignUpScreen() {
  return (
    <View style={styles.parent}>
      <View style={styles.inputsContainer}>
        <Text style={styles.title}>Connexion</Text>
        {DATA.map(item => {
          return <CustomInput placeholder={item.placeholder}></CustomInput>;
        })}
      </View>
      <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.signUpBtnStyle}>
        <Text style={styles.signUpBtnText}>
        Se connecter
        </Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.btnStyle}>
        <Text style={styles.btnText}>
        S'inscrire
        </Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}
