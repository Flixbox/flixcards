export const CREATE_DECK = 'CREATE_DECK'
export const CREATE_CARD = 'CREATE_CARD'

export const createDeck = name => ({ type: CREATE_DECK, name })
export const createCard = ({ deck, question, answer }) => ({ type: CREATE_CARD, deck, question, answer })
