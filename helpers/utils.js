export const findDeck = (id, decks) => {
    return decks.reduce(deck => {
        if (deck.id === id) return deck
    })
}
