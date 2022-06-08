import React from "react";
import {View,TextInput} from "react-native"
import {styles} from './style'
const CustomInput = ({
      containerStyle,
      style,
      value,
      onSubmitEditing,
      onChangeText,
      inputRef,
      placeholder
    }) => {
      return (
        <View style={[styles.containerStyle, containerStyle]}>
          <TextInput
            style={styles.textInput}
            value={value}
            placeholder={placeholder}
            multiline={false}
            keyboardType='default'
            editable
            // autoFocus
            onSubmitEditing={onSubmitEditing}
            allowFontScaling={false}
            underlineColorAndroid='transparent'
            onChangeText={onChangeText}
            selectionColor="blue"
            ref={inputRef}
          />
        </View>
      )
    }

    export default CustomInput