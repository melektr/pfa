import React from 'react'
import SignInScreen from '../Screens/SignInScreen'
import SignUpScreen from '../Screens/SignUpScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

// Init navigators
export const navigators = [
  {
    name: 'SignInScreen',
    component: SignInScreen,
    options: {
      headerShown: false
    }
  },
  {
      name: 'SignUpScreen',
      component: SignUpScreen,
      options: {
        headerShown: false
      }
    }
]

const StackAuthentication = () => {
  return (
    <Stack.Navigator>
      {navigators.map((item, index) => (
        <Stack.Screen
          key={index}
          name={item.name}
          options={item.options}
          component={item.component}
        />
      ))}
    </Stack.Navigator>
  )
}

export default StackAuthentication