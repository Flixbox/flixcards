import React from 'react'
import { Text, Button, Left, Right, Icon } from 'native-base'

/**
 * @returns {React.Element} A single card with general deck properties.
 */
const DeckListItem = ({ id, name, deckDetailNavigation }) => {
    function onItemPress() {
        deckDetailNavigation(id)
    }

    return (
        <Button transparent block onPress={onItemPress}>
            <Left>
                <Text>{name}</Text>
            </Left>
            <Right>
                <Icon type="AntDesign" name="rightcircleo" />
            </Right>
        </Button>
    )
}

export default DeckListItem
