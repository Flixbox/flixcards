import React, { useState } from 'react'
import { Content, Button, Text } from 'native-base'
import { connect } from 'react-redux'

import Components from '../components'
import { createDeck } from '../actions/decks'

const NewDeck = ({ dispatch }) => {
    const [state, setState] = useState({})

    function newDeck() {
        dispatch(createDeck(state.name))
    }
    return (
        <Content>
            <Text>New Deck</Text>
            <Button block onPress={newDeck}>
                <Text>Create deck</Text>
            </Button>
        </Content>
    )
}

NewDeck.navigationOptions = {
    title: 'New deck',
}

const mapDispatchToProps = dispatch => dispatch

export default connect(mapDispatchToProps)(NewDeck)
