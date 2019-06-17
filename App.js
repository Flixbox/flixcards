import { AppLoading } from 'expo'
import { Asset } from 'expo-asset'
import Constants from 'expo-constants'

import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import { Container, View } from 'native-base'

import AppNavigator from './navigation/AppNavigator'
import Components from './components'

export default props => {
    const [isLoadingComplete, setLoadingComplete] = useState(false)

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return (
            <AppLoading
                startAsync={loadResourcesAsync}
                onError={error => console.error(error)}
                onFinish={() => handleFinishLoading(setLoadingComplete)}
            />
        )
    } else {
        console.log('Creating main view!')
        return (
            <Container>
                <Components.ReduxProvider>
                    <View style={{ height: Constants.statusBarHeight }}>
                        <StatusBar barStyle="default" />
                    </View>
                    <AppNavigator />
                </Components.ReduxProvider>
            </Container>
        )
    }
}

async function loadResourcesAsync() {
    await Promise.all([
        Asset.loadAsync([require('./assets/images/robot-dev.png'), require('./assets/images/robot-prod.png')]),
    ])
}

const handleFinishLoading = setLoadingComplete => {
    setLoadingComplete(true)
}
