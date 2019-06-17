import React from 'react'
import { Container, Content, Text } from 'native-base'

import Components from '../components'

export default (DeckListScreen = () => (
    <Content>
        <Text>Here's a bunch of cards!</Text>
        <Components.DeckListItem />
        <Components.DeckListItem />
        <Components.DeckListItem />
        <Components.DeckListItem />
        <Components.DeckListItem />
        <Components.DeckListItem />
    </Content>
))

DeckListScreen.navigationOptions = {
    header: null,
}
