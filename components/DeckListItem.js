import React from 'react'
import { Card, CardItem, Text, Body } from 'native-base'

/**
 * @returns {React.Element} A single card with general deck properties.
 */
const DeckListItem = ({ id, name, cards }) => (
    <Card>
        <CardItem header>
            <Text>{name}</Text>
        </CardItem>
        <CardItem>
            <Body>
                <Text>Cards: {cards.length}</Text>
            </Body>
        </CardItem>
        <CardItem footer>
            <Text>Deck footer</Text>
        </CardItem>
    </Card>
)

export default DeckListItem
