import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import screens from '../screens'

const DeckListScreen = screens['DeckListScreen']

const DeckListStack = createStackNavigator({
    DeckList: DeckListScreen,
})

DeckListStack.navigationOptions = {
    tabBarLabel: 'Deck List',
}

export default createBottomTabNavigator({
    DeckListStack,
})
