import React from 'react'
import { Card, CardItem, Text, Body, Left, Button, Icon } from 'native-base'

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
            <Left>
                <Button transparent>
                    <Icon name="logo-github" />
                    <Text>1,926 stars</Text>
                </Button>
            </Left>
        </CardItem>
    </Card>
)

export default DeckListItem
