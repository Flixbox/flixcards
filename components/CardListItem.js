import React from 'react'
import { Card, CardItem, Text, Left, Right, Icon, Body } from 'native-base'

/**
 * @returns {React.Element} A single question card for a list display.
 */
const CardListItem = ({ question }) => (
    <Card>
        <CardItem>
            <Body>
                <Left>
                    <Icon type="AntDesign" name="question" />
                </Left>
                <Right>
                    <Text>{question}</Text>
                </Right>
            </Body>
        </CardItem>
    </Card>
)

export default CardListItem
