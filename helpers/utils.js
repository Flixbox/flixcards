export default {
    findDeck: (id, decks) => decks.find(deck => deck.id === id),
    findDeckIndex: (id, decks) => decks.findIndex(deck => deck.id === id),
}
