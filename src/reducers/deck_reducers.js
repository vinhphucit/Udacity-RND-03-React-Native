import _ from 'lodash'
import { DeckType } from './../utils/actiontypes'

const initialState = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
}

export const deckReducer = (state = initialState, action) => {
    switch (action.type) {
        case DeckType.ADD_DECK:
            return {
                ...state,
                [action.deckName]: {
                    title: action.deckName,
                    questions: []
                }
            }
        case DeckType.ADD_CARD:
            return {
                ...state,
                [action.deckName]: {
                    title: action.deckName,
                    questions: [
                        ...state[action.deckName].questions,
                        {
                            question: action.cardQuestion,
                            answer: action.cardAnswer
                        }
                    ]
                }
            }
        default:
            return state;
    }
}