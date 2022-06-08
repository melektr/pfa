import React from 'react'
import { View } from 'react-native'
import { styles } from './style'

export const screenOptionsDefault = ({ title, route, navigation, rightActionRouteName }) => {
  return ({
    headerStyle: styles.headerStyle,
    title: '',
    headerLeft: () => <View />,
    headerRight: () => <View />,
    headerBackground: () => <View />
  })
}