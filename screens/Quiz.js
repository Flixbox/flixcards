import React, { useState } from 'react'
import { Content, Button, Text, Form, Input, Item, Card, CardItem, Body, Left, Right } from 'native-base'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation'
import uuid from 'uuid/v4'

const Quiz = ({ dispatch, navigation, deckId, deck }) => {
    const [state, setState] = useState({
        finished: true,
        score: '10/10',
    })

    function goBack() {
        navigation.goBack()
    }

    function restart() {
        navigation.goBack()
    }

    return <Content>{state.finished && <Finished score={state.score} goBack={goBack} restart={restart} />}</Content>
}

const Finished = ({ goBack, restart, score }) => (
    <Card>
        <CardItem header>
            <Text>You are done!</Text>
        </CardItem>
        <CardItem>
            <Body>
                <Text>{`Score: ${score}`}</Text>
            </Body>
        </CardItem>
        <CardItem footer>
            <Left>
                <Button onPress={goBack}>
                    <Text>Back to deck</Text>
                </Button>
            </Left>
            <Right>
                <Button onPress={restart}>
                    <Text>Restart quiz</Text>
                </Button>
            </Right>
        </CardItem>
    </Card>
)

Quiz.navigationOptions = {
    title: 'Quiz',
}

export default Quiz
