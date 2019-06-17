import React from 'react'
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Components from '../components'
import { Container, Content } from 'native-base'

export default (DeckListScreen = () => (
    <Container>
        <Content>
            <Text>Here's a bunch of cards!</Text>
            <Components.DeckListItem />
            <Components.DeckListItem />
            <Components.DeckListItem />
            <Components.DeckListItem />
            <Components.DeckListItem />
            <Components.DeckListItem />
        </Content>
    </Container>
))

DeckListScreen.navigationOptions = {
    header: null,
}
