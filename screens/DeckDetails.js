import React from 'react'
import { connect } from 'react-redux'

import { Content, Card, CardItem, Text, Body, Left, Right, Button, Icon } from 'native-base'

import Components from '../components'

/**
 * @returns {React.Element} A single deck item with general deck properties.
 */
const DeckDetails = ({ id, deck, navigation }) => {
    function newCardNavigation() {
        navigation.navigate('NewCard', { deckId: id })
    }

    function quizNavigation() {
        navigation.navigate('Quiz', { deckId: id, deck })
    }

    return (
        <Content>
            <Card>
                <CardItem header>
                    <Text>{deck && deck.name}</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>Cards: {deck && Object.keys(deck.cards).length}</Text>
                    </Body>
                </CardItem>
                <CardItem footer>
                    <Left>
                        <Button transparent onPress={newCardNavigation}>
                            <Icon name="add" />
                            <Text>New card</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent onPress={quizNavigation}>
                            <Text>Start quiz</Text>
                            <Icon type="AntDesign" name="rightcircleo" />
                        </Button>
                    </Right>
                </CardItem>
            </Card>
            {deck.cards &&
                Object.keys(deck.cards).map(cardId => <Components.CardListItem {...deck.cards[cardId]} key={cardId} />)}
        </Content>
    )
}

DeckDetails.navigationOptions = {
    title: 'Deck details',
}

const mapStateToProps = ({ decks }, { navigation }) => {
    const { id } = navigation.state.params

    return {
        deck: decks[id],
        id,
    }
}

export default connect(mapStateToProps)(DeckDetails)
