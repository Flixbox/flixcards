import React from 'react'
import { Content, Button, Text } from 'native-base'
import { connect } from 'react-redux'

import Components from '../components'

const DeckListScreen = ({ decks, navigation }) => {
    function newDeckNavigation() {
        navigation.navigate('NewDeck')
    }

    function deckDetailNavigation(id) {
        navigation.navigate('DeckDetails', { id })
    }

    return (
        <Content>
            {decks.map(deck => (
                <Components.DeckListItem {...deck} deckDetailNavigation={deckDetailNavigation} key={deck.id} />
            ))}
            <Button block onPress={newDeckNavigation}>
                <Text>New deck</Text>
            </Button>
        </Content>
    )
}

DeckListScreen.navigationOptions = {
    title: 'My decks',
}

const mapStateToProps = ({ decks }) => ({
    decks,
})

export default connect(mapStateToProps)(DeckListScreen)
