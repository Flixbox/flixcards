import defaultState from '../helpers/defaultState'
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
        case CREATE_CARD:
            return state
        default:
            return state
    }
}
