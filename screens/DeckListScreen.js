import React from 'react'
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { MonoText } from '../components/StyledText'

export default (DeckListScreen = () => (
    <View>
        <ScrollView>
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
