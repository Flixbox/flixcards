import React, { useState } from 'react'
import { Content, Button, Text, Card, CardItem, Body, Left, Right, Icon, DeckSwiper, Accordion } from 'native-base'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation'
import uuid from 'uuid/v4'

const Quiz = ({ navigation }) => {
    const { deckId, deck } = navigation.state.params
    const { cards } = deck
    let deckSwiper

    const [state, setState] = useState({
        score: {
            correct: 0,
            incorrect: 0,
        },
        revealed: {},
        cardsArray: Object.keys(cards).map(id => ({ id, ...cards[id] })),
    })

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
        return <QuizCard {...card} revealed={state.revealed[card.id]} revealCard={revealCard} />
    }

    function revealCard(id) {
        setState({ ...state, revealed: { ...state.revealed, [id]: true } })
    }

    function onSwipe() {
        setState({ ...state, cardsArray: state.cardsArray.slice(1) })
        console.log(state.cardsArray.slice(1))
    }

    function assignDeckSwiperRef(c) {
        deckSwiper = c
    }

    return (
        <Content contentContainerStyle={{ flex: 1 }}>
            <DeckSwiper
                ref={assignDeckSwiperRef}
                dataSource={state.cardsArray}
                renderItem={renderItem}
                renderEmpty={renderEmpty}
                looping={false}
                onSwipeRight={onSwipe}
                onSwipeLeft={onSwipe}
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

const QuizCard = ({ id, question, answer, guessCorrect, guessIncorrect, revealCard, revealed }) => {
    function reveal() {
        revealCard(id)
    }

    return (
        <Card>
            <CardItem header>
                <Text>Question</Text>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>{question}</Text>
                </Body>
            </CardItem>
            <CardItem>
                {revealed ? (
                    <Body>
                        <Text>{answer}</Text>
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
                    </Body>
                ) : (
                    <Body>
                        <Button onPress={reveal}>
                            <Text>Reveal answer</Text>
                        </Button>
                    </Body>
                )}
            </CardItem>
            <CardItem footer />
        </Card>
    )
}

Quiz.navigationOptions = {
    title: 'Quiz',
}

export default Quiz
