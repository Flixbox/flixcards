import React, { useState } from 'react'
import { Content, Button, Text, Form, Input, Item } from 'native-base'
import { connect } from 'react-redux'

import { createCard } from '../actions/decks'

const NewCard = ({ deckId, dispatch, navigation }) => {
    const [state, setState] = useState({})

    function changeQuestion(question) {
        setState({ ...state, question })
    }

    function changeAnswer(answer) {
        setState({ ...state, answer })
    }

    function newCard() {
        const { question, answer } = state
        dispatch(createCard({ deckId, question, answer }))
        setState({})
        navigation.goBack()
    }

    return (
        <Content>
            <Form>
                <Item>
                    <Input underline placeholder="Question" value={state.question} onChangeText={changeQuestion} />
                </Item>
                <Item>
                    <Input
                        underline
                        placeholder="Answer"
                        value={state.answer}
                        onChangeText={changeAnswer}
                        onSubmitEditing={newCard}
                    />
                </Item>
                <Button block onPress={newCard}>
                    <Text>Create card</Text>
                </Button>
            </Form>
        </Content>
    )
}

NewCard.navigationOptions = {
    title: 'New card',
}

const mapDispatchToProps = dispatch => dispatch

export default connect(mapDispatchToProps)(NewCard)
