import { AppLoading } from 'expo'
import { Asset } from 'expo-asset'
import Constants from 'expo-constants'
import * as Font from 'expo-font'

import React, { useState } from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'

import AppNavigator from './navigation/AppNavigator'

export default function App(props) {
    const [isLoadingComplete, setLoadingComplete] = useState(false)

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return (
            <AppLoading
                startAsync={loadResourcesAsync}
                onError={handleLoadingError}
                onFinish={() => handleFinishLoading(setLoadingComplete)}
            />
        )
    } else {
        console.log('Creating main view!')
        return (
            <View style={styles.container}>
                <View style={{ height: Constants.statusBarHeight }}>
                    <StatusBar barStyle="default" />
                </View>
                <AppNavigator />
            </View>
        )
    }
}

async function loadResourcesAsync() {
    await Promise.all([
        Asset.loadAsync([require('./assets/images/robot-dev.png'), require('./assets/images/robot-prod.png')]),
    ])
}

function handleLoadingError(error: Error) {
    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    console.warn(error)
}

function handleFinishLoading(setLoadingComplete) {
    setLoadingComplete(true)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
