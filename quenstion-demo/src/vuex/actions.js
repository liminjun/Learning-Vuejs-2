import { POPULATE_QUESTIONS } from './mutation_types'
import api from '../api'

/**
 * Fetches and populates shopping lists
 */
export const populateQuestions = ({ dispatch }) => {
  api.fetchQuestions().then(response => {
    debugger;
    dispatch(POPULATE_QUESTIONS, response.data)
  })
}