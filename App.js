import { AppLoading } from 'expo'
import { Asset, Font } from 'expo-asset'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons'

import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import { Container, View, Root } from 'native-base'

import AppNavigator from './navigation/AppNavigator'
import Components from './components'

const App = ({ skipLoadingScreen }) => {
    const [isLoadingComplete, setLoadingComplete] = useState(false)

    if (!isLoadingComplete && !skipLoadingScreen) {
        return (
            <AppLoading
                startAsync={loadResourcesAsync}
                onError={error => console.error(error)}
                onFinish={() => handleFinishLoading(setLoadingComplete)}
            />
        )
    }
    console.log('Creating main view!')
    return (
        <Components.ReduxProvider>
            <Root>
                <Container>
                    <View style={{ height: Constants.statusBarHeight }}>
                        <StatusBar barStyle="default" />
                    </View>
                    <AppNavigator />
                </Container>
            </Root>
        </Components.ReduxProvider>
    )
}

async function loadResourcesAsync() {
    await Promise.all([
        Asset.loadAsync([require('./assets/images/robot-dev.png'), require('./assets/images/robot-prod.png')]),
        Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        }),
    ])
}

const handleFinishLoading = setLoadingComplete => {
    setLoadingComplete(true)
}

export default App
