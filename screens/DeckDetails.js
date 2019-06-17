import React from 'react'
import { Card, CardItem, Text, Body, Left, Right, Button, Icon } from 'native-base'

/**
 * @returns {React.Element} A single deck item with general deck properties.
 */
const DeckDetails = ({ id, name, cards }) => (
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

export default DeckDetails
