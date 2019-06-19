import React, { useState } from 'react'
import { Content, Button, Text, Card, CardItem, Body, Left, Right, Icon, DeckSwiper, View } from 'native-base'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation'
import uuid from 'uuid/v4'

const Quiz = ({ navigation }) => {
    const { deckId, deck } = navigation.state.params
    const [state, setState] = useState({
        finished: true,
        score: {
            correct: 0,
            incorrect: 0,
        },
    })

    const { cards } = deck
    const cardsArray = Object.keys(cards).map(id => ({ id, ...cards[id] }))
    let deckSwiper

    function goBack() {
        navigation.goBack()
    }

    function restart() {
        navigation.goBack()
    }

    function renderEmpty() {
        return <Finished score={state.score} goBack={goBack} restart={restart} />
    }

    function renderItem(card) {
        return <QuizCard {...card} />
    }

    function assignDeckSwiperRef(c) {
        deckSwiper = c
    }

    return (
        <Content contentContainerStyle={{ flex: 1 }}>
            <DeckSwiper
                ref={assignDeckSwiperRef}
                dataSource={cardsArray}
                renderItem={renderItem}
                renderEmpty={renderEmpty}
                looping={false}
            />
        </Content>
    )
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

const QuizCard = ({ question, answer, guessCorrect, guessIncorrect }) => (
    <Card>
        <CardItem header>
            <Text>Question</Text>
        </CardItem>
        <CardItem>
            <Body>
                <Text>{question}</Text>
            </Body>
        </CardItem>
        <CardItem footer>
            <Left>
                <Button transparent onPress={guessIncorrect}>
                    <Icon type="AntDesign" name="minuscircleo" />
                    <Text>Incorrect</Text>
                </Button>
            </Left>
            <Right>
                <Button transparent onPress={guessCorrect}>
                    <Text>Correct</Text>
                    <Icon type="AntDesign" name="pluscircleo" />
                </Button>
            </Right>
        </CardItem>
    </Card>
)

Quiz.navigationOptions = {
    title: 'Quiz',
}

export default Quiz
