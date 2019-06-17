import React from 'react'
import { Card, CardItem, Text, Button, Left, Right, Icon } from 'native-base'

/**
 * @returns {React.Element} A single card with general deck properties.
 */
const DeckListItem = ({ id, name }) => (
    <Button transparent block>
        <Left>
            <Text>{name}</Text>
        </Left>
        <Right>
            <Icon type="AntDesign" name="rightcircleo" />
        </Right>
    </Button>
)

export default DeckListItem
