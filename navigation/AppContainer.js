import { createStackNavigator, createAppContainer } from 'react-navigation'

import Screens from '../screens'

const MainStackNavigator = createStackNavigator({
    Home: {
        screen: Screens.DeckListScreen,
    },
    NewDeck: {
        screen: Screens.NewDeck,
    },
    NewCard: {
        screen: Screens.NewCard,
    },
    DeckDetails: {
        screen: Screens.DeckDetails,
    },
    Quiz: {
        screen: Screens.Quiz,
    },
})

export default createAppContainer(MainStackNavigator)
