import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { Icon } from 'native-base'

import Screens from '../screens'

const DeckListStack = createStackNavigator({
    DeckList: Screens.DeckListScreen,
})

DeckListStack.navigationOptions = {
    tabBarLabel: 'Deck List',
    tabBarIcon: <Icon type="MaterialCommunityIcons" name="credit-card-multiple" />,
}

export default createBottomTabNavigator({
    DeckListStack,
})
