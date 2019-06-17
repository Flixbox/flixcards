import { createStackNavigator, createAppContainer } from 'react-navigation'

import Screens from '../screens'

const MainStackNavigator = createStackNavigator({
    Home: {
        screen: Screens.DeckListScreen,
    },
    NewDeck: {
        screen: Screens.NewDeck,
    },
    DeckDetails: {
        screen: Screens.DeckDetails,
    },
})

export default createAppContainer(MainStackNavigator)
