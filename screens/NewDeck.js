import React from 'react'
import { Content, Button, Text } from 'native-base'
import { connect } from 'react-redux'

import Components from '../components'

const NewDeck = ({}) => {
    return (
        <Content>
            <Text>New Deck</Text>
        </Content>
    )
}

NewDeck.navigationOptions = {
    title: 'New deck',
}

export default NewDeck
