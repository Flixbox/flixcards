import React from 'react'
import { Content, Text } from 'native-base'
import { connect } from 'react-redux'

import Components from '../components'

const DeckListScreen = ({ decks }) => (
    <Content>
        <Text>{"Here's a bunch of cards!"}</Text>
        {decks.map(deck => (
            <Components.DeckListItem {...deck} key={deck.id} />
        ))}
    </Content>
)

DeckListScreen.navigationOptions = {
    header: null,
}

const mapStateToProps = ({ decks }) => {
    return {
        decks,
    }
}

export default connect(mapStateToProps)(DeckListScreen)
