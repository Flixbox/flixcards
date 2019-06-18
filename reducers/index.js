import defaultState from '../helpers/defaultState'
import { CREATE_DECK, CREATE_CARD } from '../actions/decks'
import uuid from 'uuid/v4'

export default (state = defaultState, action) => {
    switch (action.type) {
        case CREATE_DECK:
            return {
                ...state,
                decks: [
                    ...state.decks,
                    {
                        id: uuid(),
                        name: action.name,
                        cards: [],
                    },
                ],
            }
        case CREATE_CARD:
            return state
        default:
            return state
    }
}
