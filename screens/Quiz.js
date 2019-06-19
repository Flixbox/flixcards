import React, { useState } from 'react'
import { Content, Button, Text, Card, CardItem, Body, Left, Right, Icon, DeckSwiper, Accordion } from 'native-base'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation'
import uuid from 'uuid/v4'

const Quiz = ({ navigation }) => {
    const { deckId, deck } = navigation.state.params

    const defaultScore = {
        correct: 0,
        incorrect: 0,
    }
    const [score, setScore] = useState(defaultScore)
    const [revealed, setRevealed] = useState({})
    const [cardsArray, setCardsArray] = useState(generateCardArray(deck.cards))

    function generateCardArray(cards) {
        return Object.keys(cards).map(id => ({ id, ...cards[id] }))
    }

    function goBack() {
        navigation.goBack()
    }

    function restart() {
        setScore(defaultScore)
        setRevealed({})
        setCardsArray(generateCardArray(deck.cards))
    }

    function renderEmpty() {
        console.log(score)
        return <Finished score={score} goBack={goBack} restart={restart} />
    }

    function renderItem(card) {
        return (
            <QuizCard
                {...card}
                revealed={revealed[card.id]}
                revealCard={revealCard}
                guessCorrect={guessCorrect}
                guessIncorrect={guessIncorrect}
            />
        )
    }

    function revealCard(id) {
        setRevealed({ ...revealed, [id]: true })
    }

    function guessCorrect(id) {
        setScore({ incorrect: score.incorrect, correct: score.correct + 1 })
        finishCard(id)
    }

    function guessIncorrect(id) {
        setScore({ incorrect: score.incorrect + 1, correct: score.correct })
        finishCard(id)
    }

    function finishCard(id) {
        setCardsArray(cardsArray.slice(1))
    }

    return <Content>{cardsArray.length ? renderItem(cardsArray[0]) : renderEmpty()}</Content>
}

const Finished = ({ goBack, restart, score }) => (
    <Card>
        <CardItem header>
            <Text>You are done!</Text>
        </CardItem>
        <CardItem>
            <Body>
                <Text>{`Correct responses: ${score.correct}/${score.correct + score.incorrect}`}</Text>
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
            {revealed ? (
                <>
                    <CardItem>
                        <Body>
                            <Text>{answer}</Text>
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
                </>
            ) : (
                <CardItem footer>
                    <Button onPress={reveal}>
                        <Text>Reveal answer</Text>
                    </Button>
                </CardItem>
            )}
        </Card>
    )
}

Quiz.navigationOptions = {
    title: 'Quiz',
}

export default Quiz
