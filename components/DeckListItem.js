import React, { Component } from 'react'
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base'

/**
 * @returns {React.Element} A single card with general deck properties.
 */
const DeckListItem = () => (
    <Card>
        <CardItem header>
            <Text>Deck title</Text>
        </CardItem>
        <CardItem>
            <Body>
                <Text>Deck details</Text>
            </Body>
        </CardItem>
        <CardItem footer>
            <Text>Deck footer</Text>
        </CardItem>
    </Card>
)

export default DeckListItem
