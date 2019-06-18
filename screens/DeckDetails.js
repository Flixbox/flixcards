import React from 'react'
import { connect } from 'react-redux'

import { Content, Card, CardItem, Text, Body, Left, Right, Button, Icon } from 'native-base'

import Components from '../components'
import utils from '../helpers/utils'

/**
 * @returns {React.Element} A single deck item with general deck properties.
 */
const DeckDetails = ({ id, deck, navigation }) => {
    function newCardNavigation() {
        navigation.navigate('NewCard', { id })
    }

    return (
        <Content>
            <Card>
                <CardItem header>
                    <Text>{deck && deck.name}</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>Cards: {deck && deck.cards.length}</Text>
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
                        <Button transparent onPress={newCardNavigation}>
                            <Text>Start quiz</Text>
                            <Icon type="AntDesign" name="rightcircleo" />
                        </Button>
                    </Right>
                </CardItem>
            </Card>
            {deck && deck.cards.map(card => <Components.CardListItem {...card} key={card.id} />)}
        </Content>
    )
}

DeckDetails.navigationOptions = {
    title: 'Deck details',
}

const mapStateToProps = ({ decks }, { navigation }) => {
    const { id } = navigation.state.params

    return {
        deck: utils.findDeck(id, decks),
    }
}

export default connect(mapStateToProps)(DeckDetails)
