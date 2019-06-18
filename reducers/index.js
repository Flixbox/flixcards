import uuid from 'uuid/v4'

import defaultState from '../helpers/defaultState'
import utils from '../helpers/utils'
import { CREATE_DECK, CREATE_CARD } from '../actions/decks'

export default (state = defaultState, action) => {
    switch (action.type) {
        case CREATE_DECK:
            return {
                ...state,
                decks: [
                    ...state.decks,
                    {
                        id: action.id,
                        name: action.name,
                        cards: [],
                    },
                ],
            }
        case CREATE_CARD: {
            const { deck, question, answer } = action
            const index = utils.findDeckIndex(deck, state.decks)

            let currentDeck = state.decks[index]
            currentDeck = {
                ...currentDeck,
                cards: [
                    ...currentDeck.cards,
                    {
                        id: uuid(),
                        question,
                        answer,
                    },
                ],
            }
            return {
                ...state,
                decks: [...state.decks, currentDeck],
            }
        }
        default:
            return state
    }
}
