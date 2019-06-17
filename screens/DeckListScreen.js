import React from 'react'
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default (DeckListScreen = () => (
    <View>
        <ScrollView>
            <View>
                <Text>Get started!</Text>
            </View>
        </ScrollView>
    </View>
))

DeckListScreen.navigationOptions = {
    header: null,
}
