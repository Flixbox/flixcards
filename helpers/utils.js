export default {
    findDeck: (id, decks) => {
        return decks.find(deck => deck.id === id)
    },
}
