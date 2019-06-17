import * as WebBrowser from 'expo-web-browser'
import React from 'react'
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { MonoText } from '../components/StyledText'

export default (DeckListScreen = () => (
    <View>
        <ScrollView>
            <View>
                <Image
                    source={__DEV__ ? require('../assets/images/robot-dev.png') : require('../assets/images/robot-prod.png')}
                />
            </View>

            <View>
                <Text>Get started!</Text>
            </View>
        </ScrollView>

        <View>
            <Text>This is a tab bar. You can edit it in:</Text>

            <View>
                <MonoText>navigation/MainTabNavigator.js</MonoText>
            </View>
        </View>
    </View>
))

DeckListScreen.navigationOptions = {
    header: null,
}
