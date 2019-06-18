import React, { useState } from 'react'
import { Content, Button, Text, Form, Input, Item } from 'native-base'
import { connect } from 'react-redux'
import uuid from 'uuid/v4'

import { createDeck } from '../actions/decks'

const NewDeck = ({ dispatch, navigation }) => {
    const [state, setState] = useState({})

    function changeText(name) {
        setState({ name })
    }

    function newDeck() {
        const name = state.name
        const id = uuid()
        dispatch(createDeck(name, id))
        setState({ name: '' })
        navigation.navigate('DeckDetails', { id })
    }

    return (
        <Content>
            <Form>
                <Item>
                    <Input
                        underline
                        placeholder="Title"
                        value={state.name}
                        onChangeText={changeText}
                        onSubmitEditing={newDeck}
                    />
                </Item>
                <Button block onPress={newDeck}>
                    <Text>Create deck</Text>
                </Button>
            </Form>
        </Content>
    )
}

NewDeck.navigationOptions = {
    title: 'New deck',
}

const mapDispatchToProps = dispatch => dispatch

export default connect(mapDispatchToProps)(NewDeck)
