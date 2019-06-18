import uuid from 'uuid/v4'

import defaultState from '../helpers/defaultState'
import { CREATE_DECK, CREATE_CARD } from '../actions/decks'

export default (state = defaultState, action) => {
    switch (action.type) {
        case CREATE_DECK:
            return {
                ...state,
                decks: {
                    ...state.decks,
                    [action.id]: {
                        name: action.name,
                        cards: [],
                    },
                },
            }
        case CREATE_CARD: {
            const { deck, question, answer } = action
            return {
                ...state,
                decks: {
                    ...state.decks,
                    [deck]: {
                        ...state.decks[deck],
                        cards: {
                            ...state.decks[deck].cards,
                            [uuid()]: { ...action },
                        },
                    },
                },
            }
        }
        default:
            return state
    }
}
