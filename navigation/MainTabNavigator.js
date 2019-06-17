import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { Icon } from 'native-base'

import screens from '../screens'

const DeckListScreen = screens['DeckListScreen']

const DeckListStack = createStackNavigator({
    DeckList: DeckListScreen,
})

DeckListStack.navigationOptions = {
    tabBarLabel: 'Deck List',
    tabBarIcon: <Icon name="bowtie" />,
}

export default createBottomTabNavigator({
    DeckListStack,
})
