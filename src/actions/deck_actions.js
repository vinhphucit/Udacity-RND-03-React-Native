import { DeckType } from './../utils/actiontypes'

export const receiveDecks = (decks) => {
    return {
        type: DeckType.GET_DECKS,
        decks
    }
}

export const addNewDeck = (deckName) => {
    return {
        type: DeckType.ADD_DECK,
        deckName
    }
}

export const addNewCardToDeck = (deckName, cardQuestion, cardAnswer) => {
    return {
        type: DeckType.ADD_CARD,
        deckName,
        cardQuestion,
        cardAnswer
    }
}