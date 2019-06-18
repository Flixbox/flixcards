import uuid from 'uuid/v4'

export const CREATE_DECK = 'CREATE_DECK'
export const CREATE_CARD = 'CREATE_CARD'

export const createDeck = (name, id = uuid()) => ({ type: CREATE_DECK, name, id })
export const createCard = ({ deck, question, answer }) => ({ type: CREATE_CARD, deck, question, answer })
