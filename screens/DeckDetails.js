import React from 'react'
import { connect } from 'react-redux'

import { Card, CardItem, Text, Body, Left, Right, Button, Icon } from 'native-base'

import utils from '../helpers/utils'

/**
 * @returns {React.Element} A single deck item with general deck properties.
 */
const DeckDetails = ({ id, deck }) => (
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
                <Button transparent>
                    <Icon name="add" />
                    <Text>New card</Text>
                </Button>
            </Left>
            <Right>
                <Button transparent>
                    <Text>Start quiz</Text>
                    <Icon type="AntDesign" name="rightcircleo" />
                </Button>
            </Right>
        </CardItem>
    </Card>
)

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
