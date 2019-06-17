import React from 'react'
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Components from '../components'

console.log('DeckListItem', Components.DeckListItem)

export default (DeckListScreen = () => (
    <View>
        <ScrollView>
            <View>
                <Text>Here's a bunch of cards!</Text>
                <components.DeckListItem />
            </View>
        </ScrollView>
    </View>
))

DeckListScreen.navigationOptions = {
    header: null,
}
