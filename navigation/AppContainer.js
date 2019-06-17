import { createStackNavigator, createAppContainer } from 'react-navigation'

import Screens from '../screens'

const MainStackNavigator = createStackNavigator({
    Home: {
        screen: Screens.DeckListScreen,
    },
})

export default createAppContainer(MainStackNavigator)
