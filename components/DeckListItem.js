import React from 'react'
import { Card, CardItem, Text, Button } from 'native-base'

/**
 * @returns {React.Element} A single card with general deck properties.
 */
const DeckListItem = ({ id, name }) => (
    <Card>
        <CardItem header>
            <Button transparent>
                <Text>{name}</Text>
            </Button>
        </CardItem>
    </Card>
)

export default DeckListItem
