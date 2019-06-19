import React, { useState } from 'react'
import { Content, Button, Text, Form, Input, Item, Card, CardItem, Body, Left, Right, Icon } from 'native-base'
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
                <Button transparent onPress={goBack}>
                    <Icon type="AntDesign" name="leftcircleo" />
                    <Text>Back to deck</Text>
                </Button>
            </Left>
            <Right>
                <Button transparent onPress={restart}>
                    <Text>Restart quiz</Text>
                    <Icon type="AntDesign" name="retweet" />
                </Button>
            </Right>
        </CardItem>
    </Card>
)

Quiz.navigationOptions = {
    title: 'Quiz',
}

export default Quiz
