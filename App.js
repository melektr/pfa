import React, { useEffect, useMemo } from 'react'
import { LogBox, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import { NavigationState } from './navigators/state'
import StackAuthentication from './navigators/authentication'
// import SplashScreen from 'react-native-splash-screen'

LogBox.ignoreAllLogs(true)

const App = () => {
  // useEffect(() => {
  //   SplashScreen.hide()
  // }, [])

  const [locale, setLocale] = React.useState('en')
  const currentNavigationState = useSelector(
    (state) => state.app.currentNavigationState
  )

  // const localizationContext = useMemo(
  //   () => ({
  //     t: (scope, options) => i18n.t(scope, { locale, ...options }),
  //     locale,
  //     setLocale
  //   }),
  //   [locale]
  // )

  const renderContent = () => {
    switch (currentNavigationState) {
      case NavigationState.LAUNCH:
        return <StackAuthentication />
      // case NavigationState.HOME : return <BottomTabs/>;
    }
  }

  return (
    <>
      <StatusBar barStyle='light-content' />
      {/* <LocalizationContext.Provider value={localizationContext}> */}
        <NavigationContainer>
          {renderContent()}
        </NavigationContainer>
      {/* </LocalizationContext.Provider> */}
    </>
  )
}

export default App