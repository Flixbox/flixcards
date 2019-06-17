import React from 'react'
import { Content, Button, Text } from 'native-base'
import { connect } from 'react-redux'

import Components from '../components'

const DeckListScreen = ({ decks, navigation }) => {
    function newDeck() {
        navigation.navigate('NewDeck')
    }

    return (
        <Content>
            {decks.map(deck => (
                <Components.DeckListItem {...deck} key={deck.id} />
            ))}
            <Button block onPress={newDeck}>
                <Text>New deck</Text>
            </Button>
        </Content>
    )
}

DeckListScreen.navigationOptions = {
    header: null,
}

const mapStateToProps = ({ decks }) => ({
    decks,
})

export default connect(mapStateToProps)(DeckListScreen)
