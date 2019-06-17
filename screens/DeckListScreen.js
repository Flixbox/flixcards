import React from 'react'
import { Content } from 'native-base'
import { connect } from 'react-redux'

import Components from '../components'

const DeckListScreen = ({ decks }) => (
    <Content>
        {decks.map(deck => (
            <Components.DeckListItem {...deck} key={deck.id} />
        ))}
    </Content>
)

DeckListScreen.navigationOptions = {
    header: null,
}

const mapStateToProps = ({ decks }) => ({
    decks,
})

export default connect(mapStateToProps)(DeckListScreen)
